import React, { Component } from 'react';
import { ChatContext } from '../context/chat-context';

import './message-input.css';

const INPUT_PLACEHOLDER = 'Message';
const BUTTON_TEXT = 'Send';
const ENTER_KEY = 'Enter';

class ChatInput extends Component {
    static contextType = ChatContext;

    constructor(props) {
        super(props);
        this.state = { inputValue: '' };
    }

    sendMessage = () => {
        if (this.state.inputValue.length > 0) {
            this.context.postMessage(this.state.inputValue);
            this.setState({ inputValue: '' });
        }
    }

    onKeyPress = (e) => {
        if (e.key === ENTER_KEY) {
            this.sendMessage();
        }
    }

    handleChange = (e) => {
        this.setState({ inputValue: e.target.value });
    }

    render() {
        return (
            <div className="message-input">
                <input
                    className="message-input__text"
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleChange}
                    placeholder={INPUT_PLACEHOLDER}
                    onKeyPress={this.onKeyPress}>
                </input>
                <button
                    className="message-input__submit"
                    onClick={this.sendMessage}>
                    {BUTTON_TEXT}
                </button>
            </div>
        );
    }
}

export default ChatInput;
