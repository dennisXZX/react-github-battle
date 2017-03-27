import React, { PropTypes, Component } from 'react';
import Results from '../components/Result';
import githubHelpers from '../utils/githubHelpers';

class ResultsContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            scores:[]
        }
    }

    componentDidMount() {
        // pass the array that contains user info to githubHelpers
        // when the scores are calculated, it is returned as an array
        githubHelpers.battle(this.props.location.state.playerInfo)
            .then((scores) => { // an array containing two players' scores
                this.setState({
                    scores: scores,
                    isLoading: false
                })
            })
    }

    render() {
        return (
            <div>
                <Results 
                    isLoading={this.state.isLoading}
                    scores={this.state.scores}
                    playerInfo={this.props.location.state.playerInfo} />
            </div>
        )        
    }
}

export default ResultsContainer;