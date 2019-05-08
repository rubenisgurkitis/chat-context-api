import React, { Component } from 'react';
import { chatInitialState ,ChatContext } from './chat-context';
import { API_URL, API_TOKEN, API_HEADERS, API_QUERY } from '../constants/api';
import { USER_NAME } from '../constants/user';

class GlobalState extends Component {
    state = chatInitialState;

    componentDidMount() {
        this.fetchMessages();
        this.timer = setInterval(this.fetchMessages, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    fetchMessages = () => {
        fetch(`${API_URL}${API_TOKEN}${API_QUERY}`, {headers: API_HEADERS})
            .then(response => response.json())
            .then((payload) => {
                this.setState({ messages: payload });
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    }

    postMessage = (message) => {
        const newMessage = {
            author: USER_NAME,
            timeStamp: Date.now(),
            message
        };

        fetch(`${API_URL}${API_TOKEN}`, {
            method: 'POST',
            headers: API_HEADERS,
            body: JSON.stringify(newMessage)
        })
        .then(response => response.json())
        .then((payload) => {
            // Ugly but API is returning a string even though we are sending a number
            payload.timestamp = parseInt(payload.timestamp, 10);
            this.setState(previousState => ({ messages: [...previousState.messages, payload] }));
        })
        .catch((error) => {
            console.log('Something went wrong posting a message', error);
        });
    }

    render() {
        return (
            <ChatContext.Provider
                value={{
                    messages: this.state.messages,
                    postMessage: this.postMessage
                }}
            >
                {this.props.children}
            </ChatContext.Provider>
        );
    }
}

export default GlobalState;
