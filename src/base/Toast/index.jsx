import {
  success,
  error
} from './Toast';

export default {
  success,
  error
};

// export default {
//   success(text, duration) {
//     console.log('text----------------', text);
//     let container;
//     let toastContainerNode = document.querySelector('.onet-toast-container');
//     if (!toastContainerNode) {
//       const bodyNode = document.body;
//       container = document.createElement('div');
//       container.className = 'onet-toast-container';
//       bodyNode.appendChild(container);
//     }
//     const props = {
//       text,
//       duration,
//     };
//     ReactDOM.render(React.createElement(ToastContent, props), container);
//   },
// }
