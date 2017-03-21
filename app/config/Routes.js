import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';

const Routes = () => (
    <Router history={browserHistory}>
        <Route path="/" component={Main} >
            <Route path="/home" component={Home} />
        </Route>
    </Router>    
);

export default Routes;