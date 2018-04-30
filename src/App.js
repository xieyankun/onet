import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/main.scss';
import Header from './template/Header/Header'
import Toast from './base/Toast'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        {/* <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <Toast />>
      </div>
    );
  }
}

export default App;
