import React, { Component } from 'react';
import ReactRouter, { Link } from 'react-router';
import MainContainer from './MainContainer';

class Home extends Component {
    render() {
        return (
            <MainContainer>
                <h1>Github Battle</h1>
                <p className="lead">Some fancy motto</p>
                <Link to="/playerone">
                    <button type="button" className="btn btn-lg btn-success">Get Started</button>
                </Link>
            </MainContainer>
        )
    }
}

export default Home;