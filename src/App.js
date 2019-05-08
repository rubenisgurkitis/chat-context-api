import React from 'react';
// import logo from './logo.svg';
import './App.css';
import GlobalState from './context/GlobalState';
import Chat from './pages/chat';

function App() {
  return (
    <GlobalState>
      <Chat/>
    </GlobalState>
  );
}

export default App;
