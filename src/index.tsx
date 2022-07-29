import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HotkeysProvider } from '@blueprintjs/core';
import { store } from './redux';

import App from './containers';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HotkeysProvider>
        <App />
      </HotkeysProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
