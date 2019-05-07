import React, { Component } from 'react';
import Messages from '../components/messages';

class Chat extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Doodle chat</h1>
                <Messages></Messages>
            </React.Fragment>
        );
    }
}

export default Chat;
