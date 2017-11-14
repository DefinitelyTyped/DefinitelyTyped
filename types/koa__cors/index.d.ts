// Type definitions for @koa/cors 2.2
// Project: https://github.com/koajs/cors
// Definitions by: Xavier Stouder <https://github.com/Xstoudi>, Izayoi Ko <https://github.com/izayoiko>, Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from "koa";

export = cors;

declare function cors(options?: cors.Options): Koa.Middleware;

declare namespace cors {
    interface Options {
        origin?: ((req: Koa.Request) => string) | string;
        allowMethods?: string[] | string;
        exposeHeaders?: string[] | string;
        allowHeaders?: string[] | string;
        maxAge?: number | string;
        credentials?: boolean;
        keepHeadersOnError?: boolean;
    }
}
