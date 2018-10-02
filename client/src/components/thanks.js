import React, {Component} from 'react';
import './header.css';

class Reset extends Component{
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    <div className="left_side forgot">
                        <h2>Reset your password</h2>
                    </div>
                    <div className="right_side forgot_right">
                        <h2>Forgot your username or password?</h2>
                        <p>We receieved your email and our support team will send you instuctions to reset your password</p>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Reset;