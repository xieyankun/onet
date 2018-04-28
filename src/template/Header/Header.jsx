import React, { Component } from 'react';
import './main.scss';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="header-wrap">
        <div className="logo">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Onet</h1>
        </div>
        <div className="header-nav">
          React 通用组件
        </div>
      </header>
    );
  }
}

export default Header;
