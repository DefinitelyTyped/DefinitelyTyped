// Type definitions for kcors 2.2
// Project: https://github.com/koajs/cors
// Definitions by: Xavier Stouder <https://github.com/Xstoudi>, Izayoi Ko <https://github.com/izayoiko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as Koa from "koa";

declare function cors(options?: cors.Options): Koa.Middleware;
export = cors;

declare namespace cors {
    interface Options {
        origin?: ((ctx: Koa.Context) => string) | string;
        allowMethods?: string[] | string;
        exposeHeaders?: string[] | string;
        allowHeaders?: string[] | string;
        maxAge?: number | string;
        credentials?: boolean;
        keepHeadersOnError?: boolean;
    }
}
