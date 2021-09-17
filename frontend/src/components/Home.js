import React, { Component } from 'react';
import AppNav from './AppNav';
import Loginscreen from './Loginscreen';
class Home extends Component {
    render() {
        return (
            <div>
                <AppNav />
                <h2 style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
                    <Loginscreen />
                </h2>
            </div>
        );
    }
}

export default Home;