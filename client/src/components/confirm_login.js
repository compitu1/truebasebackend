import React, {Component} from 'react';
import './header.css';

class Confrm_login extends Component{
      componentDidMount() {
    var url = new URL(window.location.href);
    
this.user.value= url.searchParams.get("user");

$('#logs').html(this.user.value);
    }
    render(){
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    <input type="hidden" ref={(r)=>this.user=r} />
                    <div className=" welcm_back confrm_width log_in_wrap">
                    <h3>You have login Successfully</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Confrm_login;