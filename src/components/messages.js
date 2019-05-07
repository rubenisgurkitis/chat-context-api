import React, { Component } from 'react';
import { ChatContext } from '../context/chat-context';
import Message from './message';

import { USER_NAME } from '../constants/user';

import './messages.css';

class Messages extends Component {
    static contextType = ChatContext;

    render() {
        return (
            <div className="messages-container">
                {
                    this.context.messages.map((message, index) =>
                        <Message
                            key={message._id}
                            author={message.author}
                            text={message.message}
                            date={new Date(message.timestamp).toDateString()}
                            isSelfMessage={message.author === USER_NAME}
                        />
                    )
                }
            </div>
        );
    }

}

export default Messages;
