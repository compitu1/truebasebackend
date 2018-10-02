import React, {Component} from 'react';
import './header.css';

class Confrm extends Component{
      componentDidMount() {
    var url = new URL(window.location.href);
    
this.email.text= url.searchParams.get("email");

    }
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    
                    <div className=" welcm_back confrm_width log_in_wrap">
                    <h3>Check your Email</h3>
                    <p>We sent an email to <a ref={(r)=>this.email=r} >ads</a>. Please verify email.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confrm;