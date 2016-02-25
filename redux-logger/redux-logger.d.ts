// Type definitions for redux-logger v2.6.0
// Project: https://github.com/fcomb/redux-logger
// Definitions by: Alexander Rusakov <https://github.com/arusakov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module 'redux-logger' {

  type LoggerPredicate = (getState: () => any, action: any) => boolean;

  interface ColorsObject {
    title?: (action: any) => string;
    prevState?: (prevState: any) => string;
    action?: (action: any) => string;
    nextState?: (nextState: any) => string;
    error?: (error: any, prevState: any) => string;
  }

  interface ReduxLoggerOptions {
    level?: string;
    duration?: boolean;
    timestamp?: boolean;
    colors?: ColorsObject;
    logger?: any;
    logErrors?: boolean;
    collapsed?: boolean | LoggerPredicate;
    predicate?: LoggerPredicate;
    stateTransformer?: (state: any) => any;
    actionTransformer?: (action: any) => any;
    errorTransformer?: (error: any) => any;
  }

  // Trickery to get TypeScript to accept that our anonymous, non-default export is a function.
  // see https://github.com/Microsoft/TypeScript/issues/3612 for more
  namespace createLogger {}
  function createLogger(options?: ReduxLoggerOptions): Redux.Middleware;
  export = createLogger;
}
