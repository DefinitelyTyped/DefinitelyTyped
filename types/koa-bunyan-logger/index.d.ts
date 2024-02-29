import { Middleware, Request, Response } from "koa";

import Logger = require("bunyan");

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
        header?: string | undefined;
        prop?: string | undefined;
        requestProp?: string | undefined;
        field?: string | undefined;
    }

    interface RequestLoggerOptions {
        durationField?: string | undefined;
        levelFn?: ((status: number, err: Error) => string) | undefined;
        updateLogFields?: ((data: RequestData) => RequestData) | undefined;
        updateRequestLogFields?: ((requestData: RequestData) => RequestData) | undefined;
        updateResponseLogFields?: ((responseData: ResponseData) => ResponseData) | undefined;
        formatRequestMessage?: ((requestData: RequestData) => string) | undefined;
        formatResponseMessage?: ((responseData: ResponseData) => string) | undefined;
        ignorePath?: string[] | undefined;
    }

    interface TimeContextOptions {
        logLevel?: string | undefined;
        updateLogFields?: ((fields: any) => any) | undefined;
    }

    function requestLogger(opts?: RequestLoggerOptions): Middleware;
    function requestIdContext(opts?: RequestIdContextOptions): Middleware;
    function timeContext(opts?: TimeContextOptions): Middleware;
}

// Extend the Koa context to add the logger..
declare module "koa" {
    interface BaseContext {
        log: Logger;
    }
}

export = koaBunyanLogger;
