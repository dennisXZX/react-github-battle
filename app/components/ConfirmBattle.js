import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';


function puke(object) {
    return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

const ConfirmBattle = (props) => {
    if (props.isLoading === true) {
        return (
            <div>Loading!</div>
        )
    } else {
        return (
            <div className="jumbotron col-sm-12 text-center transparentBg">
                <h1>Confirm Players</h1>
                <div className="col-sm-8 col-sm-offset-2">
                    <div className="col-sm-6">
                        <p className="lead">Player 1</p>
                        <UserDetails info={props.playerInfo[0]} />
                    </div>
                    <div className="col-sm-6">
                        <p className="lead">Player 2</p>
                        <UserDetails info={props.playerInfo[1]} />
                    </div>
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
            </div>
        )
    }

}

ConfirmBattle.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    playerInfo: PropTypes.array.isRequired,
    onInitiateBattle: PropTypes.func.isRequired
}

export default ConfirmBattle;