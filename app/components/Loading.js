import React, { Component, PropTypes } from 'react';

class Loading extends Component {
    constructor(props) {
        super(props);

        this.originalText = this.props.text;
        this.state = {
            text: this.originalText
        }
    }

    componentDidMount() {
        const stopper = this.state.text + '...';
        this.interval = setInterval(() => {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.originalText
                });
            } else {
                this.setState({
                    text: this.state.text + '.'
                });
            }
        }, this.props.speed);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div className="loadingContainer">
                <p>{this.state.text}</p>
            </div>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number
}

Loading.defaultProps = {
    text: "Loading",
    speed: 300
}

export default Loading;