import * as express from "express";

declare namespace apiErrorHandler {
    // Body response: the JSON returned by api-error-handler
    // See https://github.com/expressjs/api-error-handler/blob/1.0.0/index.js
    interface Response {
        status: number;
        stack?: string | undefined;
        message: string;

        // Client errors
        code?: any;
        name?: string | undefined;
        type?: any;
    }
}

declare function apiErrorHandler(options?: any): express.ErrorRequestHandler;

export = apiErrorHandler;
