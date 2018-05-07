import React, { Component, PureComponent } from 'react';
import './main.scss';

export default class ToastContent extends (PureComponent || Component) {

  render() {
    const { text, status } = this.props;
    return (
      <div className="onet-toast">
        <div className={`onet-toast-content onet-toast-content-${status}`}>
          {text}
        </div>
      </div>
    );
  }
}
