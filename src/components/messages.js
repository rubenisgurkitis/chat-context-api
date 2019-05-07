import React, { Component } from 'react';
import { ChatContext } from '../context/chat-context';
import Message from './message';

// import { USER_NAME } from '../constants/user';

class Messages extends Component {
    static contextType = ChatContext;

    render() {
        return (
            <React.Fragment>
                {
                    this.context.messages.map((message, index) =>
                        <Message
                            key={message._id}
                            author={message.author}
                            text={message.message}
                            date={message.timestamp}
                        />
                    )
                }
            </React.Fragment>
        );
    }

}

export default Messages;
