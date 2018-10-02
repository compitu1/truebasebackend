import React, {Component} from 'react';
import './landing.css';

class ASK extends Component{
    render(){
        return(
            <div className="ask_wrap">
                <div className="container">
                    <div className="seactions">
                        <div className="heading_section"><h2>Ask | Your Ask</h2></div>
                        <div className="summery">
                            <div className="top_ask clearfix">
                                <h2>Check your inbox and create new ask</h2>
                                <a href="/new_ask">Create new ask</a>
                            </div>
                            <div className="ask_search">
                                <form>
                                    <label>Sort</label>
                                    <select>
                                        <option> Data posted</option>
                                    </select>
                                    <div>
                                        <i className="fa fa-search"></i>
                                        <input type="text" placeholder="Search Ask" />
                                    </div>
                                </form>
                            </div>
                            <div className="ask_table">
                                <div className="ask_table_head">
                                    <div className="head_row">
                                        <div>Posted</div>
                                        <div  className="big">Title</div>
                                        <div  className="big_two">Type</div>
                                        <div>Status</div>
                                        <div>Replies</div>
                                    </div>
                                </div>
                                <div className="ask_table_body">
                                    <div className="body_row">
                                        <div>Jul 15, 2018</div>
                                        <div className="big">Tips for Blockchain funding?</div>
                                        <div className="big_two">Funding lorem ipsum ipsum</div>
                                        <div>Sent</div>
                                        <div>0/5</div>
                                    </div>
                                    <div className="body_row">
                                        <div>Jul 15, 2018</div>
                                        <div className="big">Tips for Blockchain funding?</div>
                                        <div className="big_two">Funding lorem ipsum ipsum</div>
                                        <div>Sent</div>
                                        <div>0/5</div>
                                    </div>
                                    <div className="body_row">
                                        <div>Jul 15, 2018</div>
                                        <div className="big">Tips for Blockchain funding?</div>
                                        <div className="big_two">Funding lorem ipsum ipsum</div>
                                        <div>Sent</div>
                                        <div>0/5</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ASK;