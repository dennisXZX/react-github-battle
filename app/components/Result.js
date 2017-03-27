import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UersDetailsWrapper';
import MainContainer from './MainContainer';

const StartOver = () => {
    return (
        <div className="col-sm-12 topSpace">
            <Link to="/playerone">
                <button type="button" className="btn btn-lg btn-danger">Start Over</button>
            </Link>
        </div>        
    )
}

const Results = (props) => {
    // check if the data is still loading
    if (props.isLoading === true) {
        return (
            <p>LOADING...</p>
        )
    }

    // check if there is a tie
    if (props.scores[0] === props.scores[1]) {
        return (
            <div className="jumbotron col-sm-12 text-center transparentBg">  
                <h1>It's a tie!</h1>  
                <StartOver />        
            </div>
        )
    }

    // determine who is the winner
    const winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
    const losingIndex = winningIndex === 0 ? 1 : 0;

    return (
        <MainContainer>
            <h1>Results</h1>
            <div className="col-sm-8 col-sm-offset-2">
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[winningIndex]} info={props.playerInfo[winningIndex]} />
                </UserDetailsWrapper>
                <UserDetailsWrapper header="Winner">
                    <UserDetails score={props.scores[losingIndex]} info={props.playerInfo[losingIndex]} />
                </UserDetailsWrapper>
                <StartOver />
            </div>
        </MainContainer>
    )
}

Results.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playerInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired,
}

export default Results;