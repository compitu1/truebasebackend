import React, {Component} from 'react';
import './header.css';

class Aboutme extends Component{
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                   
                    <div className="log_in_wrap welcm_back">
                        <h3>Forgot password?</h3>
                        <p>Please enter your email and our support team will send you instuctions to reset your password</p>
                        <form id="signups" action="/reset">
                            <div className="pms_field">
                                <input type="text" placeholder="" name="email"/>
                                <label>Email</label>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Aboutme;