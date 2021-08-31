import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMarkdown from 'react-markdown';
import markdownData from './markdown-data';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img height='50' width='50' src={logo} className="App-logo" alt="logo" />
      </header>
      <ReactMarkdown>{markdownData.content}</ReactMarkdown>
    </div>
  );
}

export default App;
