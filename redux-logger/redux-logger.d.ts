// Type definitions for redux-logger v2.0.0
// Project: https://github.com/fcomb/redux-logger
// Definitions by: Alexander Rusakov <https://github.com/arusakov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module 'redux-logger' {

  // In this case, T is the type that represents the state involved.
  interface ReduxLoggerOptions<T> {
    actionTransformer?: (action: Redux.Action) => Redux.Action;
    collapsed?: boolean;
    duration?: boolean;
    level?: string;
    logger?: any;
    predicate?: (getState: () => T, action: Redux.Action) => boolean;
    timestamp?: boolean;
    transformer?: (state:T) => any;
  }

  export default function createLogger<T>(options?: ReduxLoggerOptions<T>): Redux.Middleware<T>;
}
