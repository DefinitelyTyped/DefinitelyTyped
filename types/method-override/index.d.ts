declare namespace Express {
    export interface Request {
        originalMethod?: string | undefined;
    }
}

import express = require("express");

declare namespace e {
    export interface MethodOverrideOptions {
        methods: string[];
    }
}

declare function e(
    getter?: string | ((req: express.Request, res: express.Response) => string),
    options?: e.MethodOverrideOptions,
): express.RequestHandler;

export = e;
