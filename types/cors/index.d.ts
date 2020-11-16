// Type definitions for cors 2.8
// Project: https://github.com/expressjs/cors/
// Definitions by: Alan Plum <https://github.com/pluma>
//                 Gaurav Sharma <https://github.com/gtpan77>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require('express');

type CustomOrigin = (
    requestOrigin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void
) => void;

declare namespace e {
    interface CorsOptions {
        /**
         * @default '*''
         */
        origin?: boolean | string | RegExp | (string | RegExp)[] | CustomOrigin;
        /**
         * @default 'GET,HEAD,PUT,PATCH,POST,DELETE'
         */
        methods?: string | string[];
        allowedHeaders?: string | string[];
        exposedHeaders?: string | string[];
        credentials?: boolean;
        maxAge?: number;
        /**
         * @default false
         */
        preflightContinue?: boolean;
        /**
         * @default 204
         */
        optionsSuccessStatus?: number;
    }
    type CorsOptionsDelegate = (
        req: express.Request,
        callback: (err: Error | null, options?: CorsOptions) => void
    ) => void;
}

declare function e(
    options?: e.CorsOptions | e.CorsOptionsDelegate
): express.RequestHandler;
export = e;
