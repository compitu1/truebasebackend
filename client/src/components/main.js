import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Signup from './Signup';
import LandingPge from './Landingpage';
import AboutMe from './Aboutme';
import Contact from './Contact';
import Login from './Login';
import Reset from './thanks';
import Wellcomback from './wellcomback';
import Skills from './skill';
import Confirm from './confirm';
import Confirm_reg from './confirm_reg';
import Profile from './profile';
import Terms from './terms';
import Privacy from './privacy';
import Confirm_login from './confirm_login';

import { BrowserRouter } from 'react-router-dom';

const Main = ()=> (
    <BrowserRouter>
<Switch>
<Route exact path='/' component={ Signup } />
<Route path='/ask' component={ LandingPge } />
<Route path='/forgot' component={ AboutMe } />
<Route path='/contact' component={ Contact } />
<Route path='/login' component={ Login } />
<Route path='/reset' component={ Reset } />
<Route path='/wellcomback' component={ Wellcomback } />
<Route path='/offers' component={ Skills } />
<Route path='/confirm' component={ Confirm } />
<Route path='/confirm_reg' component={ Confirm_reg } />
<Route path='/terms' component={ Terms } />
<Route path='/privacy' component={ Privacy } />
<Route path='/profile' component={ Profile } />
<Route path='/confirm_login' component={ Confirm_login } />

</Switch>
</BrowserRouter>

);

export default Main;