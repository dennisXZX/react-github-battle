import React, { Component, contextTypes } from 'react';
import { hashHistory } from 'react-router';

import Prompt from '../components/Prompt';

class PromptContainer extends Component {
    constructor(props) {
        super(props);

        // bind this
        this.onUpdateUser = this.onUpdateUser.bind(this);
        this.onSubmitUser = this.onSubmitUser.bind(this);

        this.state = {
            username: ''
        }
    }

    // trigger when user types in the input field
    onUpdateUser(e) {
        this.setState({
            username: e.target.value
        })
    }

    // trigger when user submits the form
    onSubmitUser(e) {
        // cache the username
        const username = this.state.username;
        // reset the state
        this.setState({
            username: ''
        });
        // route to next page depending on which page is currently on
        if (this.props.route.header == "Player Two") {
            // go to /battle
            console.log("go to battle");
            
        } else {
            // go to /playertwo
            console.log("go to playertwo");  
            hashHistory.push('/playertwo/');          
        }
    }

    render() {
        return (
            <Prompt 
                onSubmitUser={this.onSubmitUser}
                onUpdateUser={this.onUpdateUser} 
                header={this.props.route.header}
                username={this.state.username} />
        )
    }
}

export default PromptContainer;