import React, {Component} from 'react';
import './header.css';

class WellcomBack extends Component{
    constructor(props) {
    super(props);
    this.state = {
      value: [],
      skill:[]
    }
    }
      componentDidMount() {
        this.msg.innerHTML='';
    var url = new URL(window.location.href);
var c = url.searchParams.get("code");

      fetch('http://localhost:5000/checkUser/'+c, {
     method: 'get',
  }).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
).then(res => {
    if(res.data.error=='1')
    {
       // window.location.href="/signup";
    }
    else if(res.data.error=='0')
    {
        this.userID.value=c;
        
    }
   
}));
    }
 
     saveSkill = (e) => {
    e.preventDefault();
    
    let data = {
        user_id : this.userID.value,
        userType: this.userType.value,
        skill : this.userSkill.value
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
  
 handleType = (e) =>{
  this.userType.value=e.target.value;
 this.state.value.push(e.target.value);
 console.log(this.state.value);
 }
 handleSkill = (e) =>{
   this.userSkill.value=e.target.value;
  this.state.skill.push(e.target.value);
 console.log(this.state.skill);
 }
    render(){
    
        return(
            <div className="main_login">
                <div className="sign_up_wrap">
                   
                    <div className="right_side skills  welcm_back rights_ls ac full_width">
                        <h2>Community Contributions</h2>
                        <form className="form_main_page skill_forms" action="/company">
  <input type="hidden" ref={(r) => this.userID = r} name="userID" />
                      
                            
                            <cite className="loads">
                                <cite className="skill_boxs mainss  ui-state-default">
                                <cite className="innrs">
                                    <cite className="ons">
                                        <label>As a </label>
                                        <select className="" ref={(r) => this.userType=r} onChange={this.handleType} >
                                            <option value="token">Token economist</option>
                                            <option value="Advisor">Advisor</option>
                                            <option value="Agency">Agency</option>
                                            <option value="Co-founder">Co-founder</option>
                                            <option value="Community Manager">Community Manager</option>
                                            <option value="Designer">Designer</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Economist">Economist</option>
                                            <option value="Investor">Investor</option>
                                        </select>
                                    </cite>
                                    <cite className="ons">
                                        <label>I can</label>
                                        <select className="" ref={(r) => this.userSkill=r} onChange={this.handleSkill}>
                                            <option value="">Please Select any five Skills</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                        </select>
                                    </cite></cite>
                                </cite>
                                <cite className="skill_boxs mainss  ui-state-default">
                                <cite className="innrs">
                                    <cite className="ons">
                                        <label>As a </label>
                                        <select className="" ref={(r) => this.userType=r} onChange={this.handleType} >
                                            <option value="token">Token economist</option>
                                            <option value="Advisor">Advisor</option>
                                            <option value="Agency">Agency</option>
                                            <option value="Co-founder">Co-founder</option>
                                            <option value="Community Manager">Community Manager</option>
                                            <option value="Designer">Designer</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Economist">Economist</option>
                                            <option value="Investor">Investor</option>
                                        </select>
                                    </cite>
                                    <cite className="ons">
                                        <label>I can</label>
                                        <select className="" ref={(r) => this.userSkill=r} onChange={this.handleSkill}>
                                            <option value="">Please Select any five Skills</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                        </select>
                                    </cite></cite>
                                </cite>
                                <cite className="skill_boxs mainss  ui-state-default">
                                <cite className="innrs">
                                    <cite className="ons">
                                        <label>As a </label>
                                        <select className="" ref={(r) => this.userType=r} onChange={this.handleType} >
                                            <option value="token">Token economist</option>
                                            <option value="Advisor">Advisor</option>
                                            <option value="Agency">Agency</option>
                                            <option value="Co-founder">Co-founder</option>
                                            <option value="Community Manager">Community Manager</option>
                                            <option value="Designer">Designer</option>
                                            <option value="Developer">Developer</option>
                                            <option value="Economist">Economist</option>
                                            <option value="Investor">Investor</option>
                                        </select>
                                    </cite>
                                    <cite className="ons">
                                        <label>I can</label>
                                        <select className="" ref={(r) => this.userSkill=r} onChange={this.handleSkill}>
                                            <option value="">Please Select any five Skills</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                            <option value="Lorem ipsum">Lorem ipsum</option>
                                        </select>
                                    </cite></cite>
                                </cite>
                                
                            </cite>
                           <div id='demo'> </div>
                            <div className="clearfix"></div>
                            <p id="msg" ref={(r)=> this.msg=r}></p>
                            <input type="submit" value="Join the Community"  onClick={this.saveSkill} />
                            <div className="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default WellcomBack;