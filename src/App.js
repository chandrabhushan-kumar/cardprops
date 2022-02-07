import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App1">
        <div className = "heading1">
         <Card
          name="heading1"
        />
      </div>
      <div className = "heading2">
         <Card
          name="heading2"
        />
      </div>
      </div>
      <div className="App2">
      <div className = "heading3">
         <Card
          name="heading3"
        />
      </div>
      <div className = "heading4">
         <Card
          name="heading4"
        />
      </div>
      </div>
      </div>
    );
  }
}

export default App;
