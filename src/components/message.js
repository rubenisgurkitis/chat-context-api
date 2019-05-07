import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './message.css';

class Message extends Component {
    render() {
        const containerClass = this.props.isSelfMessage ? 'message message--self' : 'message';
        return (
            <div className={containerClass}>
                <div className="message__author">{this.props.author}</div>
                <div className="message__text">{this.props.text}</div>
                <div className="message__date">{this.props.date}</div>
            </div>
        );
    }
}

Message.propTypes = {
    author: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    isSelfMessage: PropTypes.bool.isRequired
};

export default Message;
