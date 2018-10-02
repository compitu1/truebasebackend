import React, {Component} from 'react';
import './header.css';

class WellcomBack extends Component{
    componentDidMount() {
        $('#msg1').hide();
        this.msg.innerHTML='';
    var url = new URL(window.location.href);
var c = url.searchParams.get("c");

      fetch('http://localhost:5000/check_code/'+c, {
     method: 'get',
  }).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    if(res.data.error=='1')
    {
        window.location.href="/";
    }
    else if(res.data.error=='0')
    {
        this.signupToken.value=res.data.email;
        console.log(this.signupToken.value);
    }
   
}));
    }
 
   postSignup = (e) => {
    e.preventDefault();
    this.msg.innerHTML='';
    this.msg1.innerHTML='';
    if(this.signupToken.value=='' || this.truebase.value=='' || this.fname.value=='' || this.lname.value=='' || this.password.value=='' ) //|| this.passwordr.value==''
    {
        this.msg.innerHTML='Please fill all the fields';
        return false;
    }
    
    if ( this.password.value.length < 8 ) {
          this.msg.innerHTML='Password Must be Greater than 8 character';
       return false;
        }
         if ( this.password.value.match(/[A-z]/) ) {
         
        }
        else
        {
             this.msg.innerHTML='Password Must contain one letter';
       return false;
        }
          if ( this.password.value.match(/[A-Z]/) ) {
         
        }
        else
        {
             this.msg.innerHTML='Password Must contain one capital letter';
       return false;
        }
        if ( this.password.value.match(/\d/)  ) {
         
        }
        else
        {
             this.msg.innerHTML='Password Must contain one Number';
       return false;
        }
      
    // if(this.password.value!=this.passwordr.value)
    // {
    //     this.msg.innerHTML='Password not matched';
    //     return false;
    // }
   
     let data = {
        user_name : this.truebase.value,
        user_fname: this.fname.value,
        user_lname: this.lname.value,
        user_email: this.signupToken.value,
        user_password:this.password.value,
        
    };
   
      fetch('http://localhost:5000/saveUser/', {
     method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data)

  }).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    if(res.data.error=='1')
    {
        $('#msg1').show();
          this.msg1.innerHTML='Truebase name not available';
       
        return false;
      
    }
    else if(res.data.error=='0')
    {
          window.location.href="/ask/?code="+res.data.id;
    }
   
}));
     
  }
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                   
                    <div className="welcm_back log_in_wrap">
                     <h3>Sign Up</h3>
                       
                        <form action="/skills" id="setup_acnt">
                            <input type="hidden"  ref={(r) => this.signupToken = r} name="signupToken" />
                            
                            <div className="pms_field">
                                <input type="text" ref={(r) => this.truebase = r} name="truebase" className="handl_name" />
                                <label className="default_lable">Username</label>
                            </div>
                              <p id="msg1" ref={(r)=> this.msg1=r}></p>
                        
                            <div className="pms_field">
                                <input type="text" ref={(r) => this.fname = r} name="fname" />
                                <label>First Name</label>
                            </div>
                            <div className="pms_field">
                                <input type="text" ref={(r) => this.lname = r} name="lname" />
                                <label>Last Name</label>
                            </div>
                            <div className="pms_field ">
                                <input type="password" id="password_show_hide" className="passwrd_st show_hide" ref={(r) => this.password = r} name="password" />
                               <label>Password</label>
                               <a href="#" className="password_show"><i className="fa fa-eye"></i></a>
                            </div>
                            <div id="pswd_info">
                                <h4>Must Include at least:</h4>
                                <ul>
                                    <li id="length" class="invalid">- 8 characters</li>
                                    <li id="capital" class="invalid">- 1 capital letter</li>
                                    <li id="number" class="invalid">- 1 number</li>
                                    <li id="letter" class="invalid">- 1 letter</li>
                                </ul>
                            </div>
                            <p id="msg" ref={(r)=> this.msg=r}></p>
                            <input type="submit" className="blurs defaultss" value="Proceed" onClick={this.postSignup} />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default WellcomBack;