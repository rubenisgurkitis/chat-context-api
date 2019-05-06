import React from 'react';

const chatInitialState = {
    messages: []
};

const ChatContext = React.createContext(chatInitialState);

export { chatInitialState, ChatContext };
