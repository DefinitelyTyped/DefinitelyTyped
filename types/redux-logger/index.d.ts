export as namespace ReduxLogger;

import * as Redux from "redux";

export const logger: Redux.Middleware;

export type LoggerPredicate = (
    getState: () => any,
    action: any,
    logEntry?: LogEntryObject,
) => boolean;

export type StateToString = (state: any) => string;
export type ActionToString = (action: any) => string;
export type ErrorToString = (error: any, prevState: any) => string;

export interface ColorsObject {
    title?: boolean | ActionToString | undefined;
    prevState?: boolean | StateToString | undefined;
    action?: boolean | ActionToString | undefined;
    nextState?: boolean | StateToString | undefined;
    error?: boolean | ErrorToString | undefined;
}

export interface LevelObject {
    prevState?: string | boolean | StateToString | undefined;
    action?: string | boolean | ActionToString | undefined;
    nextState?: string | boolean | StateToString | undefined;
    error?: string | boolean | ErrorToString | undefined;
}

export interface LogEntryObject {
    action?: string | boolean | ActionToString | undefined;
    started?: number | undefined;
    startedTime?: Date | undefined;
    took?: number | undefined;
    error?(error: any): any;
    nextState?(state: any): any;
    prevState?(state: any): any;
}

export interface ReduxLoggerOptions {
    level?: string | ActionToString | LevelObject | undefined;
    duration?: boolean | undefined;
    timestamp?: boolean | undefined;
    colors?: ColorsObject | false | undefined;
    titleFormatter?(formattedAction: any, formattedTime: string, took: number): string;
    logger?: any;
    logErrors?: boolean | undefined;
    collapsed?: boolean | LoggerPredicate | undefined;
    predicate?: LoggerPredicate | undefined;
    diff?: boolean | undefined;
    diffPredicate?: LoggerPredicate | undefined;
    stateTransformer?(state: any): any;
    actionTransformer?(action: any): any;
    errorTransformer?(error: any): any;
}

export function createLogger(options?: ReduxLoggerOptions): Redux.Middleware;

export default logger;
