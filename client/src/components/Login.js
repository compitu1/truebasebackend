import React, {Component} from 'react';
import './header.css';
  
class Login extends Component{
   
     postLogin = (e) => {
    e.preventDefault();
    if(this.username.value=='')
    {
        this.msg.innerHTML='Please enter username';
        return false;
    }
    if(this.password.value=='')
    {
        this.msg.innerHTML='Please enter Password';
        return false;
    }
     let data = {
        user_name : this.username.value,
        password : this.password.value
        };
     fetch('http://localhost:5000/login/', {
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
        this.msg.innerHTML='Invalid username or password';
        return false;
      
    }
    else if(res.data.error=='0')
    {
        this.msg.innerHTML='Login Successfull';
          window.location.href="/confirm_login/?user="+res.data.user;
    }
   
}));
     
     
  }
 
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                   
                    <div className="welcm_back log_in_wrap">
                    <h3>Log In</h3>
                        <form id="logins">
                            <div className="pms_field">
                                <input type="text" placeholder="" ref={(r) => this.username = r} name="username" />
                                <label>Email</label>
                            </div>
                            <div className="pms_field">
                                <input type="password"  className="password" ref={(r) => this.password = r} name="password" />
                                <label>Password</label>
                            </div>
                            <p id="msg" ref={(r)=>this.msg=r}></p>
                            <input type="submit" className="blurs defaultss" value="Login"  onClick={this.postLogin} />

                            <div className="clearfix buttonss">
                                <a href="/">Don’t have an account?</a>
                                <a href="/forgot">Forgot your password?</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;