import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MenuBar from './MenuBar'

class App extends Component {
  render() {
    return (
      <center>
        <div  style={{backgroundColor:'lightBlue'}}>
            <h1>App routing example:</h1>
            <MenuBar/>
        </div>
      </center>
    );
  }
}

export default App;
