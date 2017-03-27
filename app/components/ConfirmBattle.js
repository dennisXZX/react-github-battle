import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UersDetailsWrapper';
import MainContainer from './MainContainer';

const ConfirmBattle = (props) => {
    if (props.isLoading === true) {
        return (
            <div>Loading!</div>
        )
    } else {
        return (
            <MainContainer>
                <h1>Confirm Players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <UserDetailsWrapper header="Player 1">
                        <UserDetails info={props.playerInfo[0]} />
                    </UserDetailsWrapper>
                    <UserDetailsWrapper header="Player 2">
                        <UserDetails info={props.playerInfo[1]} />
                    </UserDetailsWrapper>
                </div>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-12 topSpace">
                        <button type="button" className="btn btn-lg btn-success" onClick={props.onInitiateBattle}>
                            Initiate Battle!
                        </button>
                    </div>
                    <div className="col-sm-12 topSpace">
                        <Link to="/playerone">
                            <button type="button" className="btn btn-lg btn-danger">
                                Reselect Players
                            </button>
                        </Link>
                    </div>
                </div>                    
            </MainContainer>
        )
    }

}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playerInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle;