// Type definitions for redux-logger v2.0.0
// Project: https://github.com/fcomb/redux-logger
// Definitions by: Alexander Rusakov <https://github.com/arusakov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module 'redux-logger' {
    function createLogger(options?: createLogger.LoggerOptions): Redux.Middleware;

    namespace createLogger {
        export interface LoggerOptions {
            actionTransformer?: (action: any) => any;
            collapsed?: boolean;
            duration?: boolean;
            level?: string;
            logger?: any;
            predicate?: (getState: Function, action: any) => boolean;
            timestamp?: boolean;
            transformer?: (state:any) => any;
        }
    }

    export = createLogger;
}
