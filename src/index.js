import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createSyncStore } from 'redux-bluetooth/build/webapp';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { TYPES, reducer } from './store';

const store = createSyncStore(TYPES.REMOTE_ACTIONS, reducer);
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
