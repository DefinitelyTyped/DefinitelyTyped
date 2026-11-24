declare namespace Express {
    export interface Request {
        originalMethod?: string | undefined;
    }
}

import express = require("express");

declare namespace e {
    export interface MethodOverrideOptions {
        methods?: string[] | readonly string[] | undefined;
    }
}

declare function e(
    options?: e.MethodOverrideOptions,
): express.RequestHandler;
declare function e(
    getter?: string | ((req: express.Request, res: express.Response) => string | undefined | null),
    options?: e.MethodOverrideOptions,
): express.RequestHandler;

export = e;
