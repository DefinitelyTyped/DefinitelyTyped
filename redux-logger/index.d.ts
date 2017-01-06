// Type definitions for redux-logger v2.7.4
// Project: https://github.com/evgenyrodionov/redux-logger
// Definitions by: Alexander Rusakov <https://github.com/arusakov/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Redux from "redux";

type LoggerPredicate = (getState: () => any, action: any) => boolean;

type StateToString = (state: any) => string;
type ActionToString = (action: any) => string;
type ErrorToString = (error: any, prevState: any) => string;

interface ColorsObject {
  title?: boolean | ActionToString;
  prevState?: boolean | StateToString;
  action?: boolean | ActionToString;
  nextState?: boolean | StateToString;
  error?: boolean | ErrorToString;
}

interface LevelObject {
  prevState?: string | boolean | StateToString;
  action?: string | boolean | ActionToString;
  nextState?: string | boolean | StateToString;
  error?: string | boolean | ErrorToString;
}

interface ReduxLoggerOptions {
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

export default function createLogger(options?: ReduxLoggerOptions): Redux.Middleware;
