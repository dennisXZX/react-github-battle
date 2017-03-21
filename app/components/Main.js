import React, { Component } from 'react';

class Main extends Component {
    render() {
        return (
        <div>
            Hello from Main!
            {this.props.children}
        </div>
        )
    }
}

export default Main;