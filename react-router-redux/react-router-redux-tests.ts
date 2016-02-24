/// <reference path="./react-router-redux.d.ts" />
/// <reference path="../redux/redux.d.ts" />
/// <reference path="../react-router/react-router.d.ts" />



import { createStore, combineReducers, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

const reducer = combineReducers({ routing: routerReducer });
const store = createStore(reducer);

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)
