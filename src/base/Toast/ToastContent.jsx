import React, { Component, PureComponent } from 'react';
import './main.scss';

export default class ToastContent extends (PureComponent || Component) {

  render() {
    const { text } = this.props;
    return (
      <div className="toast">{text}</div>
    );
  }
}
