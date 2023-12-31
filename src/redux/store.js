import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducers';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk, logger),
  ),
);
if (window.Cypress) {
  window.store = store;
}

export default store;
