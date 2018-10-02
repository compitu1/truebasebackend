import React, {Component} from 'react';
import './header.css';

class Profile extends Component{
    render(){
        return(
            <div className="company_wraps">
                <div className="container clearfix">
                    <div className="col_clear clearfix">
                        <div className="colm_9">
                            <div className="seactions">
                                <div className="heading_section"><h2>Overview</h2></div>
                                <div className="summery">
                                    <div className="company_img">
                                        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                    </div>
                                    <div className="company_detil">
                                        <h3>Bobo Smith</h3>
                                        <ul>
                                            <li>CEO at pretendCo</li>
                                            <li><i className="fa fa-map-marker"></i>Boston</li>
                                        </ul>
                                    </div>
                                    <div className="clearfix"></div>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                </div>
                            </div>

                            
                            <div className="seactions">
                                <div className="heading_section"><h2>experience</h2></div>
                                <div className="experienc clearfix">
                                    <div className="company_img">
                                        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                    </div>
                                    <div className="company_detil">
                                        <h3>CEO at PretendCo</h3>
                                        <ul>
                                            <li>Jan 2017 - Present</li>
                                            <li><i className="fa fa-map-marker"></i>Boston</li>
                                        </ul>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <h5>Accomplishments</h5>
                                        <blockquote>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </blockquote>

                                        <blockquote>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </blockquote>
                                    </div>
                                </div>
                                
                                <div className="experienc clearfix">
                                    <div className="company_img">
                                        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                    </div>
                                    <div className="company_detil">
                                        <h3>CEO at PretendCo</h3>
                                        <ul>
                                            <li>Jan 2017 - Present</li>
                                            <li><i className="fa fa-map-marker"></i>Boston</li>
                                        </ul>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <h5>Accomplishments</h5>
                                        <blockquote>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </blockquote>
                                        
                                        <blockquote>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </blockquote>
                                    </div>
                                </div>                                
                            </div>
                            
                            <div className="seactions">
                                <div className="heading_section"><h2>Education</h2></div>
                                <div className="experienc clearfix">
                                    <div className="company_img">
                                        <img src="https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&h=350" />
                                    </div>
                                    <div className="company_detil">
                                        <h3>University if North Caroline - Chapel Hill</h3>
                                        <ul>
                                            <li>Master Degree, Computer Science</li>
                                            <li><i className="fa fa-calendar"></i>2009 - 2012</li>
                                        </ul>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                        <h5>Accomplishments</h5>
                                        <blockquote>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </blockquote>

                                        <blockquote>
                                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                        </blockquote>
                                    </div>
                                </div>
                                                             
                            </div>

                        </div>
                        <div className="colm_3">
                            <div className="side_sec">
                                <div className="heading_section"><h2>Reputation Score</h2></div>
                                <div className="score_wrap">
                                    <div><span>GOOD</span></div>
                                </div>
                                <div id="canvas-holder">
                                    <canvas id="chart-area"></canvas>
                                    <span>Reputation Score Factors</span>
                                </div>

                                <h3>Future Release</h3>
                                <p>Reputation score is not yet available. To claim your profile and establish your reputation score, please click on the 'Claim Profile' Buttion above.</p>
                            </div>
                            <div className="side_sec">
                                <div className="heading_section"><h2>Skils</h2></div>
                                <div className="tas">
                                    <a href="/">javascript  <i className="fa fa-check"></i></a>
                                    <a href="/">HTML / CSS  <i className="fa fa-check"></i></a>
                                    <a href="/">UX Design   <i className="fa fa-check"></i></a>
                                    <a href="/">UI Design</a>
                                </div>
                                <div className="type">
                                    <a href="/"> Beginner</a>
                                    <a href="/">Inermediate </a>
                                    <a href="/">Expert </a>
                                </div>
                            </div>
                            
                            <div className="side_sec">
                                <div className="heading_section"><h2>Social</h2></div>
                                <ul>
                                    <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;