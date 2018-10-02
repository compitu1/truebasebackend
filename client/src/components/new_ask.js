import React, {Component} from 'react';
import './landing.css';

class NEWASK extends Component{
    render(){
        return(
            <div className="ask_wrap">
                <div className="container">
                    <form>
                        <div id="example-basic">
                            <h3>one</h3>
                            <section>
                                <div className="seactions min_hights">
                                    <div className="heading_section"><h2>Ask | Create | Step 1: Add Detail</h2></div>
                                    <div className="create_form">
                                        <label>Type</label>
                                        <select className="basic">
                                            <option>Select One</option>
                                            <option>Type two</option>
                                            <option>Type Three</option>
                                        </select>
                                        <label>Title</label>
                                        <input type="text" placeholder="I need help with funding" />
                                        <label>Summary</label>
                                        <textarea></textarea>
                                        <label>Instructions</label>
                                        <textarea></textarea>
                                        <label>Keywords</label>
                                        <input type="text" placeholder="I need help with funding" />
                                    </div>
                                </div>
                            </section>
                            <h3>Two</h3>
                            <section>
                                <div className="seactions min_hights">
                                    <div className="heading_section"><h2>Ask | Create | Step 2: Determine Participants</h2></div>
                                </div>
                            </section>
                            <h3>Three</h3>
                            <section>
                                <div className="seactions min_hights">
                                    <div className="heading_section"><h2>Ask | Create | Step 3: Set Budget</h2></div>
                                </div>
                            </section>
                            <h3>Four</h3>
                            <section>
                                <div className="seactions min_hights">
                                    <div className="heading_section"><h2>Ask | Create | Step 4: Finalize & Submit </h2></div>
                                </div>
                            </section>
                        </div>
                    </form>
                
                </div>
            </div>
        )
    }
}

export default NEWASK;