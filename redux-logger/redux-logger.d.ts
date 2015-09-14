// Type definitions for redux-logger v1.0.6
// Project: https://github.com/fcomb/redux-logger
// Definitions by: Alexander Rusakov <https://github.com/arusakov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module 'redux-logger' {

  interface ReduxLoggerOptions {
    collapsed?: boolean;
    level?: string;
    logger?: any;
    timestamp?: boolean;
    transformer?: (state:any)=>any;
    predicate?: (getState:Function, action:any)=>any;
  }

  export default function createLogger(options?:ReduxLoggerOptions):Redux.Middleware;
}
