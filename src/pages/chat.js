import React, { Component } from 'react';
import Messages from '../components/messages';
import MessageInput from '../components/message-input';

import './chat.css';

class Chat extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <h1>Doodle chat</h1>
                </header>
                <div className="chat-container">
                    <Messages></Messages>
                    <MessageInput></MessageInput>
                </div>
            </React.Fragment>
        );
    }
}

export default Chat;
