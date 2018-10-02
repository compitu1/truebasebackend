import React, {Component} from 'react';
import './header.css';

class Confrm_reg extends Component{
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                   
                    <div className="log_in_wrap welcm_back confrm_width ">
                    <h3>You have completed registration successfully</h3>
                    <p>Please proceed to login page.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confrm_reg;