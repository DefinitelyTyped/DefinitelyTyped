// Type definitions for method-override
// Project: https://github.com/expressjs/method-override
// Definitions by: Santi Albo <https://github.com/santialbo/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module Express {
    export interface Request {
        originalMethod?: string;
    }
}

declare module "method-override" {
    import express = require('express');

    namespace e {
        export interface MethodOverrideOptions {
            methods: string[];
        }
    }

    function e(getter?: string, options?: e.MethodOverrideOptions): express.RequestHandler;
    function e(getter?: (req: express.Request, res: express.Response) => string, options?: e.MethodOverrideOptions): express.RequestHandler;

    export = e;
}