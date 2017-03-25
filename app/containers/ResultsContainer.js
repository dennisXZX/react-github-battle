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
        console.log(this.props.location.state.playerInfo);
        // pass the array that contains user info to githubHelpers
        // when the scores are calculated then set the state
        githubHelpers.battle(this.props.location.state.playerInfo)
            .then((scores) => {
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