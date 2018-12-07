// Type definitions for method-override
// Project: https://github.com/expressjs/method-override
// Definitions by: Santi Albo <https://github.com/santialbo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare namespace Express {
    export interface Request {
        originalMethod?: string;
    }
}

import express = require('express');

declare namespace e {
    export interface MethodOverrideOptions {
        methods: string[];
    }
}

declare function e(getter?: string | ((req: express.Request, res: express.Response) => string), options?: e.MethodOverrideOptions): express.RequestHandler;

export = e;
