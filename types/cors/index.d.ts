// Type definitions for cors 2.8
// Project: https://github.com/troygoode/node-cors/
// Definitions by: Mihhail Lapushkin <https://github.com/mihhail-lapushkin/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped




import express = require('express');

type CustomOrigin = (
    requestOrigin: string,
    callback: (err: Error | null, allow?: boolean) => void
) => void;

declare namespace e {
    interface CorsOptions {
        origin?: boolean | string | RegExp | string[] | RegExp[] | CustomOrigin;
        methods?: string | string[];
        allowedHeaders?: string | string[];
        exposedHeaders?: string | string[];
        credentials?: boolean;
        maxAge?: number;
        preflightContinue?: boolean;
        optionsSuccessStatus?: number;
    }
}

declare function e(options?: e.CorsOptions): express.RequestHandler;
export = e;
