import React from 'react';
import { GenerateQuotes, MadeWithLove } from './components';
import './App.css';

function App(props) {

  return (
    <div className="container">
      <GenerateQuotes />
      <MadeWithLove by="Rudra Gaur" />
    </div>
  );
}

export default App;