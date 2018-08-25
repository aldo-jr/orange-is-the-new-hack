import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'mobx-react';

const store = {};

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
