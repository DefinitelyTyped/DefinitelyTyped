// Type definitions for koa-basic-auth 2.x
// Project: https://github.com/koajs/basic-auth
// Definitions by: Tobias Wolff <https://github.com/Tobias4872/>
// Definitions: https://github.com/Tobias4872/DefinitelyTyped

import * as Koa from "koa";

declare function auth(opts: {
    name: string;
    pass: string;
}): Koa.Middleware;

export = auth;
