import React, { Component } from 'react';
import { hashHistory } from 'react-router';

import ConfirmBattle from '../components/ConfirmBattle';
import githubHelpers from '../utils/githubHelpers';

class ConfirmBattleContainer extends Component {
    constructor(props) {
        super(props);

        // bind this
        this.handleInitiateBattle = this.handleInitiateBattle.bind(this);

        // isLoading - determine if the Github info has been retrieved
        // playerone - Player One username
        // playertwo - Player Two username
        // playerInfo - an array containing Github info for two players
        this.state = {
            isLoading: true,
            playerone: this.props.location.query.playerone,
            playertwo: this.props.location.query.playertwo,
            playerInfo: []
        }
    }
    componentDidMount() {
        // pass in two player names to the helper function to retrieve Github info
        // the return value from getPlayersInfo is a promise
        githubHelpers.getPlayersInfo([this.state.playerone, this.state.playertwo])
            .then((players) => {
                this.setState({
                    isLoading: false,
                    playerInfo: [players[0], players[1]]
                })
            })
    }
    handleInitiateBattle() {
        // go to the result page
        hashHistory.push({
            pathname: '/result',
            state: {
                playerInfo: this.state.playerInfo
            }
        });        
    }
    render() {
        return (
            <ConfirmBattle 
                isLoading={this.state.isLoading}
                playerone={this.state.playerone}
                playertwo={this.state.playertwo}
                playerInfo={this.state.playerInfo}
                onInitiateBattle={this.handleInitiateBattle}
            />
        )
    }
}

export default ConfirmBattleContainer;