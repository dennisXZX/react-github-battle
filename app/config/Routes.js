import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import Main from '../components/Main';
import Home from '../components/Home';
import promptContainer from '../containers/promptContainer';

const Routes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={Main} >
            <IndexRoute component={Home} />
            <Route path="playerone" header="Player One" component={promptContainer} />
            <Route path="playertwo" header="Player Two" component={promptContainer} />
        </Route>
    </Router>
);

export default Routes;