/// <reference path="./react-router-redux.d.ts" />
/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react/react-dom.d.ts" />

import { createStore, combineReducers } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const store = createStore(
  combineReducers({
    routing: routerReducer
  })
);

const history = syncHistoryWithStore(browserHistory, store);
