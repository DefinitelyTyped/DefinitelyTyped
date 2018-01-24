// Type definitions for express-to-koa 1.0
// Project: https://github.com/kaelzhang/express-to-koa
// Definitions by: Xiaohan Zhang <https://github.com/xiaohanzhang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from "koa";

export = expressToKoa;

declare function expressToKoa(
    middleware: (
        req: Koa.Request,
        res: Koa.Response,
        next: () => Promise<any>
    ) => any
): Koa.Middleware;
