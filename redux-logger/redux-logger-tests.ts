/// <reference path="./redux-logger.d.ts" />

import createLogger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux'

let logger = createLogger();

let loggerWithOpts = createLogger({
  actionTransformer: actn => actn,
  collapsed: true,
  duration: true,
  level: 'error',
  logger: console,
  predicate: (getState, action) => true,
  timestamp: true,
  transformer: state => state
});

let createStoreWithMiddleware = applyMiddleware(
  logger, loggerWithOpts
)(createStore);
