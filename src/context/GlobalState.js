import React, { Component } from 'react';
import { chatInitialState ,ChatContext } from './chat-context';
import { API_URL, API_TOKEN, API_HEADERS, API_MESSAGES_LIMIT_QUERY } from '../constants/api';

class GlobalState extends Component {
    state = chatInitialState;

    componentDidMount() {
        this.timer = setInterval(this.fetchMessages, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    fetchMessages = () => {
        fetch(`${API_URL}${API_TOKEN}${API_MESSAGES_LIMIT_QUERY}`, {headers: API_HEADERS})
            .then(response => response.json())
            .then((payload) => {
                this.setState({ messages: payload });
            })
            .catch((error) => {
                console.log('Something went wrong', error);
            });
    }

    postMessage = (message) => {
        // TODO
    }

    render() {
        return (
            <ChatContext.Provider
                value={{
                    messages: this.state.messages
                }}
            >
                {this.props.children}
            </ChatContext.Provider>
        );
    }
}

export default GlobalState;
