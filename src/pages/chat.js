import React, { Component } from 'react';
import Messages from '../components/messages';
import MessageInput from '../components/message-input';

class Chat extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Doodle chat</h1>
                <Messages></Messages>
                <MessageInput></MessageInput>
            </React.Fragment>
        );
    }
}

export default Chat;
