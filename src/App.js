import React, { Component } from 'react';
import './App.css';
import './styles/main.scss';
import Header from './template/Header/Header'
import Toast from './base/Toast'

class App extends Component {

  success() {
    Toast.success('success');
  }
  error() {
    Toast.error('error');
  }

  render() {
    return (
      <div className="App">
        <Header />
        <button onClick={this.success}>成功</button>
        <button onClick={this.error}>失败</button>
        <button onClick={this.error}>异常</button>
        <button onClick={this.error}>信息</button>
      </div>
    );
  }
}

export default App;
