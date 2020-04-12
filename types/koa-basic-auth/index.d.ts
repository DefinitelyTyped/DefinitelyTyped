// Type definitions for koa-basic-auth 2.x
// Project: https://github.com/koajs/basic-auth
// Definitions by: Tobias Wolff <https://github.com/Tobias4872>
// Definitions: https://github.com/Tobias4872/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from "koa";

declare function auth(opts: auth.Options): Koa.Middleware;

declare namespace auth {
    interface Options {
        name: string;
        pass: string;
    }
}

export = auth;
