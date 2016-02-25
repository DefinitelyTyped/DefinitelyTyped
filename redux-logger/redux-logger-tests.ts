/// <reference path="./redux-logger.d.ts" />

import * as createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux'

let logger = createLogger();

let loggerWithOpts = createLogger({
  level: 'error',
  duration: true,
  timestamp: true,
  colors: {
    title: (action) => '#000000',
    prevState: (prevState) => '#000000',
    action: (action) => '#000000',
    nextState: (nextState) => '#000000',
    error: (error, prevState) => '#000000'
  },
  logger: console,
  logErrors: true,
  collapsed: true,
  predicate: (getState, action) => true,
  stateTransformer: state => state,
  actionTransformer: actn => actn,
  errorTransformer: err => err

});

let createStoreWithMiddleware = applyMiddleware(
  logger, loggerWithOpts
)(createStore);
