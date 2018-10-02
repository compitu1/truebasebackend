import React, {Component} from 'react';
import './header.css';

class Signup extends Component{
   
   componentDidMount() {
     this.msg.innerHTML='';
    var url = new URL(window.location.href);
    
let utype= url.searchParams.get("userType");
if(utype)
{
    this.userType.value=utype;
}
else
{
    this.userType.value='no';
}
let review = url.searchParams.get("review");
if(review)
{
    this.review.value=review;
}
else
{
    this.review.value='no';
}
    }
  postSignup = (e) => {
    e.preventDefault();
     this.msg.innerHTML='';
     var email = this.email.value;
      fetch('http://localhost:5000/sendEmail/'+email+'/'+this.userType.value+'/'+this.review.value, {
    method: 'get'
  }).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    
    if(res.data.error=='1')
    {
         // this.msg.innerHTML='Please Verify Email';
       return false;
    }
    else if(res.data.error=='0')
    {
       // this.msg.innerHTML='Please Verify Email';
        window.location.href='/confirm/?email='+this.email.value;
    }
   
}));
     
  }
    render(){
       
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                    
                    <div className="main_sign_up  welcm_back">
                    <h3>Advance Your Blockchain Business and Career</h3>
                    <p>An open, incentivized, and trusted network for blockchain professionals.</p>
                        <form id="signups" action="/wellcomback">
                        <input type="hidden" ref={(r) => this.userType = r} name="userType" />
                          <input type="hidden" ref={(r) => this.review = r} name="review" />
                      
                            <div className="pms_field">
                                <input type="text" placeholder="" ref={(r) => this.email = r} name="email" />
                                <label>Email Address</label>
                                <input type="submit" value="Sign Up" onClick={this.postSignup} />
                            </div>
                            <a href="https://t.me/truebase" className="telegrm"> <i className="fa fa-paper-plane"></i> Join our Telegram</a>
                            <p id="msg" ref={(r) => this.msg=r}></p>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup;