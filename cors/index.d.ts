// Type definitions for cors
// Project: https://github.com/troygoode/node-cors/
// Definitions by: Mihhail Lapushkin <https://github.com/mihhail-lapushkin/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped




import express = require('express');

declare namespace e {
    interface CorsOptions {
        origin?: any;
        methods?: any;
        allowedHeaders?: any;
        exposedHeaders?: any;
        credentials?: boolean;
        maxAge?: number;
        preflightContinue?: boolean;
    }
}

declare function e(options?: e.CorsOptions): express.RequestHandler;
export = e;
