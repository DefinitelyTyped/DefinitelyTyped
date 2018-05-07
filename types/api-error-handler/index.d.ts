// Type definitions for api-error-handler v1.0.0
// Project: https://github.com/expressjs/api-error-handler
// Definitions by: Tanguy Krotoff <https://github.com/tkrotoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import * as express from 'express';

declare namespace apiErrorHandler {

    // Body response: the JSON returned by api-error-handler
    // See https://github.com/expressjs/api-error-handler/blob/1.0.0/index.js
    interface Response {
        status: number;
        stack?: string;
        message: string;

        // Client errors
        code?: any;
        name?: string;
        type?: any;
    }
}

declare function apiErrorHandler(options?: any): express.ErrorRequestHandler;

export = apiErrorHandler;
