// Type definitions for honeybadger 1.3
// Project: https://github.com/honeybadger-io/honeybadger-node
// Definitions by: Ryan Skrzypek <https://github.com/rskrz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.9

import { RequestHandler, ErrorRequestHandler } from 'express';
import { EventEmitter } from 'events';

declare namespace honeybadger {
    interface ConfigureOptions {
        apiKey: string;
        endpoint?: string;
        hostname?: string;
        environment?: string;
        projectRoot?: string;
        logger?: Console;
        developmentEnvironments?: ReadonlyArray<string>;
        filters?: ReadonlyArray<string>;
    }
    interface metadata {
        name?: string;
        message?: string;
        context?: object;
        session?: object;
        headers?: object;
        params?: object;
        cgiData?: object;
        url?: string;
        component?: string;
        action?: string;
        fingerprint?: string;
    }
    type CallbackFunction = (err: Error | null, notice: object | null) => void;
    type LambdaHandler = (event: object, context: object) => void;
    interface HoneyBadgerInstance extends EventEmitter {
        configure: (options: ConfigureOptions) => void;
        notify: (err?: any, name?: any, extra?: CallbackFunction | metadata, callback?: CallbackFunction) => void;
        setContext: (context: object) => void;
        resetContext: (context?: object) => void;
        factory: (options?: ConfigureOptions) => HoneyBadgerInstance;
        errorHandler: ErrorRequestHandler;
        requestHandler: RequestHandler;
        lambdaHandler: (handler: LambdaHandler) => LambdaHandler;
        onUncaughtException: (func: (error: Error) => void) => void;
    }
}
declare const honeybadger: honeybadger.HoneyBadgerInstance;
export = honeybadger;
