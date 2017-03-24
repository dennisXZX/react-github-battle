import React, { Component, PropTypes } from 'react';

class Prompt extends Component {
    render() {
        return (
            <div className="jumbotron col-sm-6 col-sm-offset-3 text-center transparentBg">
                <h1>{this.props.header}</h1>
                <div className="col-sm-12">
                    <form>
                        <div className="form-group">
                            <input className="form-control"
                                   placeholder="Github Username" 
                                   onChange={this.props.onUpdateUser}
                                   // empty the input field on the Player Two page
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

Prompt.propTypes = {
    header: PropTypes.string.isRequired
}

export default Prompt;