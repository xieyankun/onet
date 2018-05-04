import React, { Component } from 'react';
import './App.css';
import './styles/main.scss';
import Header from './template/Header/Header'
import Toast from './base/Toast'

class App extends Component {

  show() {
    Toast.success('0000');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.show}>Toast</button>
      </div>
    );
  }
}

export default App;
