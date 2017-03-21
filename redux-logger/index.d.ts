// Type definitions for redux-logger v2.6.0
// Project: https://github.com/fcomb/redux-logger
// Definitions by: Alexander Rusakov <https://github.com/arusakov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Redux from "redux";

// Trickery to get TypeScript to accept that our anonymous, non-default export is a function.
// see https://github.com/Microsoft/TypeScript/issues/3612 for more
declare namespace createLogger {
  export type LoggerPredicate = (getState: () => any, action: any) => boolean;

  export type StateToString = (state: any) => string;
  export type ActionToString = (action: any) => string;
  export type ErrorToString = (error: any, prevState: any) => string;

  export interface ColorsObject {
    title?: boolean | ActionToString;
    prevState?: boolean | StateToString;
    action?: boolean | ActionToString;
    nextState?: boolean | StateToString;
    error?: boolean | ErrorToString;
  }

  export interface LevelObject {
    prevState?: string | boolean | StateToString;
    action?: string | boolean | ActionToString;
    nextState?: string | boolean | StateToString;
    error?: string | boolean | ErrorToString;
  }

  export interface ReduxLoggerOptions {
    level?: string | ActionToString | LevelObject;
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
    diff?: boolean;
    diffPredicate?: LoggerPredicate;
  }
}
declare function createLogger(options?: createLogger.ReduxLoggerOptions): Redux.Middleware;
export default createLogger;
