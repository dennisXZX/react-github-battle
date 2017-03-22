import React, { Component } from 'react';
import styles from '../styles/index';

class Prompt extends Component {
    render() {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={styles.transparentBg}>
                <h1>{this.props.header}</h1>
                <div className="col-sm-12">
                    <form>
                        <div className="form-group">
                            <input className="form-control"
                                   placeholder="Github Username" 
                                   onChange={this.props.onUpdateUser}
                                   value={this.props.username}
                                   type="text" />
                        </div>
                    </form>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button className="btn btn-block btn-success"
                                onClick={this.props.onSubmitUser}>
                                Continue
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Prompt;