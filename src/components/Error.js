import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Error extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log("Mamy błąd : ", error, errorInfo);
    }


    render() {
        const { message, children } = this.props;
        return (
            <div>
                {this.state.hasError ? message : children}
            </div>
        )
    }
}

Error.propTypes = {
    message: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
}