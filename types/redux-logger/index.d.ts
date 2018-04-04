// Type definitions for redux-logger 3.0
// Project: https://github.com/fcomb/redux-logger
// Definitions by: Alexander Rusakov <https://github.com/arusakov>
//                 Kevin Groat <https://github.com/kgroat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export as namespace ReduxLogger;

import * as Redux from 'redux';

export const logger: Redux.Middleware;

export type LoggerPredicate = (
    getState: () => any,
    action: any,
    logEntry?: LogEntryObject
) => boolean;

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

export interface LogEntryObject {
    action?: string | boolean | ActionToString;
    started?: number;
    startedTime?: Date;
    took?: number;
    error?(error: any): any;
    nextState?(state: any): any;
    prevState?(state: any): any;
}

export interface ReduxLoggerOptions {
    level?: string | ActionToString | LevelObject;
    duration?: boolean;
    timestamp?: boolean;
    colors?: ColorsObject | false;
    logger?: any;
    logErrors?: boolean;
    collapsed?: boolean | LoggerPredicate;
    predicate?: LoggerPredicate;
    diff?: boolean;
    diffPredicate?: LoggerPredicate;
    stateTransformer?(state: any): any;
    actionTransformer?(action: any): any;
    errorTransformer?(error: any): any;
}

export function createLogger(options?: ReduxLoggerOptions): Redux.Middleware;

export default logger;
