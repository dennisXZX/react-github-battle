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
            userInputName: '',
            playerone: '',
        }
    }

    // trigger when user types in the input field
    onUpdateUser(e) {
        this.setState({
            userInputName: e.target.value
        })
    }

    // trigger when user submits the form
    onSubmitUser(e) {
        // route to next page depending on which page is currently on
        if (this.props.route.header == "Player One") {
            // go to /playertwo
            // store the current username for player one, reset the username state for player two
            this.setState({
                playerone: this.state.userInputName,
                userInputName: ""
            });
            hashHistory.push('/playertwo');
        } else {
            // go to /battle
            // send the query to ConfirmBattleContainer
            hashHistory.push({
                pathname: '/battle',
                query: {
                    playerone: this.state.playerone,
                    playertwo: this.state.userInputName
                }
            });
        }
    }
    render() {
        return (
            <Prompt 
                onSubmitUser={this.onSubmitUser}
                onUpdateUser={this.onUpdateUser} 
                header={this.props.route.header}
                username={this.state.userInputName} />
        )
    }
}

export default PromptContainer;