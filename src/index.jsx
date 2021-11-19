import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './plugins/store';
import './plugins/i18n/index';
import axiosSetup from './plugins/axiosSetup';
// TODO подеючить глобал scss

axiosSetup();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
