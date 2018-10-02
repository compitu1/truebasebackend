import React, {Component} from 'react';
import './landing.css';

class Landing extends Component{
      componentDidMount() {
        this.msg.innerHTML='';
    var url = new URL(window.location.href);
var c = url.searchParams.get("code");

        this.codes.value=c;
    
    }
    
    handleType = (e) =>{
       
         fetch('http://localhost:5000/getSkill/'+this.userType.value, {
      
      method: "get"
    });//.then(res => res.json())
     // .then(res => this.setState({ stations: parseStations(res.stations) }))
      //.then(res => this.setState({ stations: res.stations }))
      //.catch(e => )
  }
    postSignup = (e) => {
    e.preventDefault();
   
    
  
     let data = {
        review : this.review.value,
        userType: this.userType.value,
        user_id : this.codes.value
    };
   
      fetch('http://localhost:5000/saveAsk/', {
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
          this.msg.innerHTML=res.data.msg;
       
        return false;
      
    }
    else if(res.data.error=='0')
    {
      //  console.log(res.data.id);
          window.location.href="/offers/?code="+this.codes.value;
    }
   
}));
     
  }
    render(){
        return(

            <div className="main_login">
                <div className="sign_up_wrap">
                    <div className="welcm_back log_in_wrap">
                     <h3>Ask</h3>
                     <p>Your ask will be matched with other members offers</p>
                        <form action="/offers" method="post">
                        <input type="hidden" ref={(r)=>this.codes=r} name="codes" /> 
                            <div className="clearfix ask_wr">
                                <label>I Need a/an </label>
                                <select className="basic"  ref={(r)=> this.userType=r} id="utypes" onChange={this.handleType}  name="userType">
                                    <option value="">Select</option>
                                    <option value="token">Token economist</option>
                                    <option value="advisor">Advisor</option>
                                    <option value="agency">Agency</option>
                                    <option value="co-founder">Co-founder</option>
                                    <option value="community manager">Community manager</option>
                                    <option value="Designer">Designer</option>
                                    <option value="Developer">Developer</option>
                                    <option value="developer evangelist">Developer Evangelist</option>
                                    <option value="economist">Economist</option>
                                    <option value="engineer">Engineer</option>
                                    <option value="entrepreneur">Entrepreneur</option>
                                    <option value="influencer">Influencer</option>
                                    <option value="investor">Investor</option>
                                    <option value="lawyer">Lawyer</option>
                                    <option value="marketer">>Marketer</option>
                                    <option value="project manager">Project manager</option>
                                    <option value="recruiter">Recruiter</option>
                                    <option value="researcher">Researcher</option>
                                    <option value="social media manager">Social media manager</option>
                                    <option value="someone">Someone</option>
                                    <option value="writer">Writer</option>
                                </select>
                            </div>
                            
                            <div className="clearfix ask_wr ask_new">
                                <label>To</label>
                                <select className="basic " ref={(r)=> this.review=r}  name="review" >
                                    <option value="">Select</option>
                                    <option value="Review a whitepaper">Review a whitepaper</option>
                                    <option value="Review a business">Review a business</option>
                                    <option value="Review a career">Review a career</option>
                                    <option value="Review a co-founder">Review a co-founder</option>
                                    <option value="Review a community">Review a community</option>
                                    <option value="Review a company">Review a company</option>
                                    <option value="Review a ICO">Review a ICO</option>
                                    <option value="Review a next advisor">Review a next advisor</option>
                                    <option value="Review a next investor">Review a next investor</option>
                                    <option value="Review a pitch deck">Review a pitch deck</option>
                                    <option value="Review a press release">Review a press release</option>
                                    <option value="Review a product brief">Review a product brief</option>
                                    <option value="Review a project">Review a project</option>
                                    <option value="Review a proof of concept">Review a proof of concept</option>
                                    <option value="Review a team">Review a team</option>
                                    <option value="Review a social media">Review a social media</option>
                                    <option value="Review a telegram group">Review a telegram group</option>
                                </select>
                            </div>
                            <div className="clearfix"></div>
                                <p id="msg" ref={(r)=> this.msg=r}></p>
                         
                            <input type="submit" value="Next" className="blurs defaultss" onClick={this.postSignup} />
                            <div className="clearfix"></div>
                        </form>

                    </div>
                </div>
            </div>

        )
    }
}

export default Landing;