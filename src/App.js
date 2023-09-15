import logo from './logo.svg';
import './App.css';
import colorData from "./color-data.json"
import { useState } from 'react';
import ColorApp from './ColorApp';

function App() {
  return (
    <div className="App">
      <link href="../dist/index.css" rel="stylesheet"></link>
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
        <a className="underline" >
          Header means it's in the above part of the app
        </a>

        <a href="#" className="no-underline hover:underline ...">Link</a>
      </header>
      <ColorApp />
    </div>

  );
}

export default App;
