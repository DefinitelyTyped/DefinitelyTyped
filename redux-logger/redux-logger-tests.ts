/// <reference path="./redux-logger.d.ts" />

import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux'

let logger = createLogger();

let loggerWithOpts = createLogger({
  collapsed: true,
  level: 'warn',
  logger: console.log,
  timestamp: false,
  transformer: state => state,
  predicate: (getState, action) => true
});

let createStoreWithMiddleware = applyMiddleware(
  logger, loggerWithOpts
)(createStore);
