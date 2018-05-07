// Type definitions for cors 2.8
// Project: https://github.com/troygoode/node-cors/
// Definitions by: Alan Plum <https://github.com/pluma>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import express = require('express');

type CustomOrigin = (
    requestOrigin: string,
    callback: (err: Error | null, allow?: boolean) => void
) => void;

declare namespace e {
    interface CorsOptions {
        origin?: boolean | string | RegExp | (string | RegExp)[] | CustomOrigin;
        methods?: string | string[];
        allowedHeaders?: string | string[];
        exposedHeaders?: string | string[];
        credentials?: boolean;
        maxAge?: number;
        preflightContinue?: boolean;
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
