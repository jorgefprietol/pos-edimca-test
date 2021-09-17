import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ReactNotifications from 'react-notifications-component';

import Home from './components/Home';
import Admin from './components/Admin';
import Product from './components/Product';
import List from './components/List';
import EditList from './components/EditList';
import Client from './components/Client';

class App extends Component {
    render() {
        return (
            <Router>
            <ReactNotifications />
                <Switch>
                    <Route path='/' exact={true} component={Home} />
                    <Route path='/Product' exact={true} component={Product} />
                    <Route path='/admin' exact={true} component={Admin} />
                    <Route path='/list' exact={true} component={List} />
                    <Route path='/client' exact={true} component={Client} />
                    <Route path='/editList' exact={true} component={EditList} />
                </Switch>
            </Router>
        );
    }
}

export default App;