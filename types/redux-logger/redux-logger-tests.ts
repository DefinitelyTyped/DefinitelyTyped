
import {createLogger} from 'redux-logger';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';

let loggerSimple = createLogger();

let loggerSimpleOpts = createLogger({
  duration: true,
  timestamp: true,
  logger: console,
  logErrors: true,
  predicate: (getState, action) => true,
  stateTransformer: (state) => state,
  actionTransformer: (action) => action,
  errorTransformer: (error) => error,
  diff: true,
  diffPredicate: (getState, action) => true,
});

let loggerCollapsedBool = createLogger({
  collapsed: true
});

let loggerCollapsedPredicate = createLogger({
  collapsed: (getAction, action) => true
});

let loggerColorsBoolean = createLogger({
  colors: {
    title: false,
    prevState: false,
    action: false,
    nextState: false,
    error: false
  }
});

let loggerColorsFunction = createLogger({
  colors: {
    title: (action) => '#000',
    prevState: (state) => '#000',
    action: (action) => '#000',
    nextState: (state) => '#000',
    error: (error, prevState) => '#000'
  }
});

let loggerLevelString = createLogger({
  level: 'log'
});

let loggerLevelFunction = createLogger({
  level: (action) => 'log'
});

let loggerLevelObjectFunction = createLogger({
  level: {
    prevState: (state) => 'log',
    action: (action) => 'log',
    nextState: (state) => 'log',
    error: (error, prevState) => 'log'
  }
});

let loggerLevelObjectBoolean = createLogger({
  level: {
    prevState: false,
    action: false,
    nextState: false,
    error: false
  }
});

let loggerLevelObjectString = createLogger({
  level: {
    prevState: 'log',
    action: 'log',
    nextState: 'log',
    error: 'log'
  }
});

let createStoreWithMiddleware = applyMiddleware(
  logger,
  loggerSimpleOpts,
  loggerCollapsedBool,
  loggerCollapsedPredicate,
  loggerColorsBoolean,
  loggerColorsFunction,
  loggerLevelString,
  loggerLevelFunction,
  loggerLevelObjectFunction,
  loggerLevelObjectBoolean,
  loggerLevelObjectString
)(createStore);
