import React, {Component} from 'react';
import './header.css';
const $ = window.$;
var utype=[];
var uskill=[];
class WellcomBack extends Component{
   
      componentDidMount() {
        
        this.msg.innerHTML='';
    var url = new URL(window.location.href);
var c = url.searchParams.get("code");

    this.userID.value=c;
    }
 
     saveSkill = (e) => {
    e.preventDefault();
    
    let data = {
        user_id : this.userID.value,
        userType: utype,
        skill : uskill
    };
      fetch('http://localhost:5000/updateProfile/', {
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
          this.msg.innerHTML='Error while updating data';
       
        return false;
      
    }
    else if(res.data.error=='0')
    {
         window.location.href="/confirm_reg";
    }
   
}));
     
  }
     addTask = (e) => {
 utype.push($('.usertype').val());
 uskill.push($('.skilltype').val());
 console.log(utype);
 console.log(uskill);
 }
 
    render(){
    
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                
                <div className="welcm_back log_in_wrap">
                     <h3>Offers</h3>
                     <p>The more you offer, the more asks you will be able to make.</p>
                        <form action="/signup" method="get">
                            <div className="clearfix ask_wr">
                                <label>As a/an</label>
                                <select className="basic usertype" ref={(r)=>this.userType=r}  name="userType">
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
                            
                            <div className="clearfix ask_wr">
                                <label>I can</label>
                                <select className="basic skilltype" ref={(r)=>this.review=r}  name="review">
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
                            
                            <div className="clearfix"><a href="#" className="adds" onClick={this.addTask}>Add</a></div>
                            <div className="selected">
                                <p>You must choose at least one offer</p>
                                <ul className="sortings">
                                    <li className="selected_lis ui-state-default" id="li1">
                                        <span className="fa fa-arrows-alt"></span>
                                        <input type="hidden" value="" className="first_input" />
                                        <input type="hidden" value="" className="last_input" />
                                        As a/an <strong className="first_select">token economist</strong> i can <strong className="last_select">review a whitepaper</strong>
                                    </li>
                                    <li className="selected_lis ui-state-default" id="li2">
                                        <span className="fa fa-arrows-alt"></span>
                                        <input type="hidden" value="" className="first_input" />
                                        <input type="hidden" value="" className="last_input" />
                                        As a/an <strong className="first_select">token economist</strong> i can <strong className="last_select">review a whitepaper</strong>
                                    </li>
                                    <li className="selected_lis ui-state-default" id="li3">
                                        <span className="fa fa-arrows-alt"></span>
                                        <input type="hidden" value="" className="first_input" />
                                        <input type="hidden" value="" className="last_input" />
                                        As a/an <strong className="first_select">token economist</strong> i can <strong className="last_select">review a whitepaper</strong>
                                    </li>
                                    <li className="selected_lis ui-state-default" id="li4">
                                        <span className="fa fa-arrows-alt"></span>
                                        <input type="hidden" value="" className="first_input" />
                                        <input type="hidden" value="" className="last_input" />
                                        As a/an <strong className="first_select">token economist</strong> i can <strong className="last_select">review a whitepaper</strong>
                                    </li>
                                    <li className="selected_lis ui-state-default" id="li5">
                                        <span className="fa fa-arrows-alt"></span>
                                        <input type="hidden" value="" className="first_input" />
                                        <input type="hidden" value="" className="last_input" />
                                        As a/an <strong className="first_select">token economist</strong> i can <strong className="last_select">review a whitepaper</strong>
                                    </li>
                                    <li className="selected_lis ui-state-default" id="li6">
                                        <span className="fa fa-arrows-alt"></span>
                                        <input type="hidden" value="" className="first_input" />
                                        <input type="hidden" value="" className="last_input" />
                                        As a/an <strong className="first_select">token economist</strong> i can <strong className="last_select">review a whitepaper</strong>
                                    </li>
                                    <li className="selected_lis ui-state-default" id="li7">
                                        <span className="fa fa-arrows-alt"></span>
                                        <input type="hidden" value="" className="first_input" />
                                        <input type="hidden" value="" className="last_input" />
                                        As a/an <strong className="first_select">token economist</strong> i can <strong className="last_select">review a whitepaper</strong>
                                    </li>
                                    <li className="selected_lis ui-state-default" id="li8">
                                        <span className="fa fa-arrows-alt"></span>
                                        <input type="hidden" value="" className="first_input" />
                                        <input type="hidden" value="" className="last_input" />
                                        As a/an <strong className="first_select">token economist</strong> i can <strong className="last_select">review a whitepaper</strong>
                                    </li>
                                    <li className="selected_lis ui-state-default" id="li9">
                                        <span className="fa fa-arrows-alt"></span>
                                        <input type="hidden" value="" className="first_input" />
                                        <input type="hidden" value="" className="last_input" />
                                        As a/an <strong className="first_select">token economist</strong> i can <strong className="last_select">review a whitepaper</strong>
                                    </li>
                                    <li className="selected_lis ui-state-default" id="li10">
                                        <span className="fa fa-arrows-alt"></span>
                                        <input type="hidden" value="" className="first_input" />
                                        <input type="hidden" value="" className="last_input" />
                                        As a/an <strong className="first_select">token economist</strong> i can <strong className="last_select">review a whitepaper</strong>
                                    </li>
                                </ul>
                            </div>
                         <input type="hidden" ref={(r) => this.userID = r} name="userID" />
               <p id="msg" ref={(r)=> this.msg=r}></p>
                         
                            <input type="submit"  className="blurs defaultss" value="Finish" onClick={this.saveSkill} />
                            <div className="clearfix"></div>
                        </form>

                    </div>
                   
           
                </div>
            </div>
        )
    }
}

export default WellcomBack;