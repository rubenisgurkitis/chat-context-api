import React from 'react';
import logo from './logo.svg';
import './App.css';
import GlobalState from './context/GlobalState';

function App() {
  return (
    <GlobalState>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </GlobalState>
  );
}

export default App;
