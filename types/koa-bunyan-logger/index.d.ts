// Type definitions for koa-bunyan-logger 2.1
// Project: https://github.com/koajs/bunyan-logger
// Definitions by: Steven McDowall <https://github.com/sjmcdowall>
//                 Jan Karlo Dela Cruz <https://github.com/jankdc>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Middleware, Request, Response } from 'koa';

import Logger = require('bunyan');

declare function koaBunyanLogger(logger?: Logger): Middleware;

declare namespace koaBunyanLogger {
    interface RequestData {
        req: Request;
    }

    interface ResponseData {
        req: Request;
        res: Response;
    }

    interface RequestIdContextOptions {
        header?: string;
        prop?: string;
        requestProp?: string;
        field?: string;
    }

    interface RequestLoggerOptions {
        durationField?: string;
        levelFn?: (status: number, err: Error) => string;
        updateLogFields?: (data: RequestData) => RequestData;
        updateRequestLogFields?: (requestData: RequestData) => RequestData;
        updateResponseLogFields?: (responseData: ResponseData) => ResponseData;
        formatRequestMessage?: (requestData: RequestData) => string;
        formatResponseMessage?: (responseData: ResponseData) => string;
        ignorePath?: string[];
    }

    interface TimeContextOptions {
        logLevel?: string;
        updateLogFields?: (fields: any) => any;
    }

    function requestLogger(opts?: RequestLoggerOptions): Middleware;
    function requestIdContext(opts?: RequestIdContextOptions): Middleware;
    function timeContext(opts?: TimeContextOptions): Middleware;
}

// Extend the Koa context to add the logger..
declare module 'koa' {
    interface BaseContext {
        log: Logger;
    }
}

export = koaBunyanLogger;
