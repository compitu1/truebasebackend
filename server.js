'use strict'
const express = require('express');
var cors = require('cors');
const app = express();
var nodemailer = require('nodemailer');
var randomNumber = require('random-number');
const cookieParser =require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('./database');
var emails = require('./emails');
var fs= require('fs'); 
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.options('*',cors());
app.use(cors());
var urls='http://localhost:3000/';
app.post('/login',(req,res)=>{
    let username= req.body.user_name;
    let password= req.body.password;
   
   mongoose.users_Schema
  .find({
    user_email: username,
    user_password: password   // search query
  })
  .then(doc => {
    if(doc.length>0)
    {
        res.json({'error':'0','user':doc[0].user_fname});
        return false;
    }
    else
    {
       res.json({'error':'1'});
    }
  })
  .catch(err => {
    res.json({'error':'1'});
  })
});
app.get('/checkUser/:id',(req,res)=>{
   let id= req.params.id;
  
   if(id=='')
   {
    res.json({'error':'1'});
    return false;
   }
   else
   {
    mongoose.users_Schema
  .find({
    _id: id   // search query
  })
  .then(doc => {
    if(doc.length>0)
    {
        res.json({'error':'0'});
        return false;
    }
    else
    {
       res.json({'error':'1'});
        return false;
    }
  })
  .catch(err => {
    res.json({'error':'1'});
        return false;
  })
   }
});
app.get('/check_code/:id',(req,res)=>{
   let code= req.params.id;
   if(code=='')
   {
    res.json({'error':'1'});
    return false;
   }
   else
   {
    mongoose.codeSchema
  .find({
    code: code   // search query
  })
  .then(doc => {
    if(doc.length>0)
    {
        res.json({'error':'0','email':doc[0].email});
        return false;
    }
    else
    {
        
       res.json({'error':'1'});
        return false;
    }
  })
  .catch(err => {
    console.error(err)
  })
   }
});
app.post('/saveUser',(req,res) => {
    let user_name= req.body.user_name;
    let user_email= req.body.user_email;
          mongoose.users_Schema  // search query
  .find({$or:[{user_name: user_name},{user_email:user_email}]
       
  })
  .then(doc => {
    if(doc.length>0)
    {
        res.json({'error':'1'});
        return false;
    }
    else
    {
         var test = mongoose.users_Schema(req.body).save(function (err, data) {
        if (err) res.json({'error':'1'});
        else
        {
            console.log(data);
            res.json({'error':'0','id':data._id});}
    });
    }
  })
  .catch(err => {
    res.json({'error':'1'});
  })
    
   
});
app.post('/saveAsk',(req,res) => {
    let user_review= req.body.review;
    let user_Type= req.body.userType;
    let user_id= req.body.codes;
         var test = mongoose.ask_Schema(req.body).save(function (err, data) {
        if (err) res.json({'error':'1'});
        else
        {
            
            res.json({'error':'0','id':user_id});}
    });
   
});
app.post('/updateProfile',(req,res) => {
    let user_id= req.body.user_id;
    let userType= req.body.userType;
    let skills= req.body.skill;
       for(var i=0;i<userType.length;i++)
        {
            if(userType[i]!='')
            {
                   var test = mongoose.skill_Schema({'user_id':user_id,'userType':userType[i],'skill':skills[i]}).save(function (err, data) {
        if (err) console.log('error');
    
    });    
            }
         
        }
      
    
    
   res.json({'error':'0'});
    
   
});
app.get('/getSkill/:skill',(req,res)=>{
    var skill = req.params.skill;
  //  console.log(skill); return false;
    let rawdata = fs.readFileSync('./ask.json');  
let mydt = JSON.parse(rawdata);  

var skills=[];
for(var i=0;i<mydt[skill].length;i++)
{
    skills.push(mydt[skill][i].value);
  
}
res.json(JSON.stringify(skills));
//console.log(skills);
});
app.get('/sendEmail/:email/:userType/:review',(req,res)=>{
  var email = req.params.email;
  var userType= req.params.userType;
  var review= req.params.review;
    var options = {
  min:  0
, max:  1000
, integer: true
}

var rush= randomNumber(options);
 
    var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jicstech8897@gmail.com',
    pass: 'aftab%$#@!'
  }
});



     mongoose.users_Schema
  .find({
    user_email: email   // search query
  })
  .then(doc => {
    if(doc.length>0)
    {
        var mailOptions = {
  from: 'jamil@proppms.com',
  to: email,
  subject: 'Truebase SignUp',
  html: 'SomeOne tried to SignUp with your email ID'
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
   res.json({'error':'1'});
  } else {
   res.json({'error':'0'});
  }
});
        res.json({'error':'0'});
        return false;
    }
    else
    {
        
  
   mongoose.codeSchema
  .findOneAndDelete(
    {
      email: email  // search query
    })
    
  .then(doc => {
    console.log(doc)
  })
  .catch(err => {
    console.error(err)
  })
  var mailOptions = {
  from: 'jamil@proppms.com',
  to: email,
  subject: 'Truebase SignUp Code',
  html: emails.log(urls+'wellcomback/?c='+rush)
};
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    var test = mongoose.codeSchema({email:email,code:rush,userType:userType,review:review}).save(function (err, data) {
        if (err) res.json({'error':'1'});
        else
       res.json({'error':'0'});
  
    });
    console.log('Email sent: ' + info.response);
  }
});
    }
    
  })
  .catch(err => {
    res.json({'error':'1'});
    return false;
  })
    
  //  res.json({'name':email});
});
const port = 5000;

app.listen(port, () => `Server running on port ${port}`);