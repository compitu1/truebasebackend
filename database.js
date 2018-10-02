let mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/truebase', { useNewUrlParser: true });
var code = new mongoose.Schema({
    code: Number,
    email: String,
    userType: String,
    review: String
});
var asks= new mongoose.Schema({
    user_id: String,
    userType: String,
    review: String
});
var users = new mongoose.Schema({
    user_email: String,
    user_fname: String,
    user_lname: String,
    user_password: String,
    user_status:Number,
    user_name: String
});
var users_Skill= new mongoose.Schema({
    user_id: String,
    skill : String,
    userType: String
});
var codeSchema = mongoose.model('code', code);
var users_Schema= mongoose.model('users',users);
var skill_Schema= mongoose.model('user_skill',users_Skill);
var ask_Schema= mongoose.model('asks',asks);
 
module.exports = {
    codeSchema: codeSchema,
    users_Schema: users_Schema,
    skill_Schema:skill_Schema,
    ask_Schema: ask_Schema
  
}
