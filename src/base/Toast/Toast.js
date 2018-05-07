import React from 'react';
import ReactDOM from 'react-dom';
import ToastContent from './ToastContent'

let index = 0;
const durationDefault = 2000;
const containerList = {};

const createContainerId = () => {
  return ++index;
};

/**
 * 执行 Toast 结束 callback
 * @param  {Function} callback 关闭 Toast 回调
 */
const closeNotifyCallback = callback => {
  if (typeof callback === 'function') {
    callback();
  }
};

/**
 * 关闭 Toast
 * @param  {[type]}   containerId Toast 容器Id
 * @param  {Function} callback    Toast 消失时回调
 */
const closeToast = () => {
  const toastContainerNode = document.querySelector('.onet-toast-container');
  ReactDOM.unmountComponentAtNode(toastContainerNode);
  document.body.removeChild(toastContainerNode);
};

/**
 * notify显示
 * @param  {[type]}   text     显示文案
 * @param  {[type]}   duration 显示时长
 * @param  {[type]}   status   notify状态
 * @param  {Function} callback notify消失时回调
 */

const show = (text, duration, status, callback) => {
  console.log('options----------------');
  console.log('text----------------', text);
  let container;
  let toastContainerNode = document.querySelector('.onet-toast-container');
  if (!toastContainerNode) {
    const bodyNode = document.body;
    container = document.createElement('div');
    container.className = 'onet-toast-container';
    bodyNode.appendChild(container);
  }
  const props = {
    text,
    duration,
    status,
    callback
  };

  ReactDOM.render(React.createElement(ToastContent, props), container);

  setTimeout(() => {
    closeToast();
  }, 3000);
  

  // const timeOutId = setTimeout(() => {
  //   ReactDOM.render(
  //     <ToastContent
  //       text={text}
  //     />,
  //     container
  //   );
  // }, props.duration || durationDefault);

  // containerList[containerId] = { container, callback, timeOutId };
  // return containerId;
}

export function success(text, duration, callback) {
  return show(text, duration, 'success', callback);
}

export function error(text, duration, callback) {
  return show(text, duration, 'error', callback);
}
