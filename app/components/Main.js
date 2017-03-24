import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
        <div className="main-container">
            <h1>Title</h1>
            {this.props.children}
        </div>
        )
    }
}

export default Main;