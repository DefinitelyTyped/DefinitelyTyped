// Type definitions for kcors 2.2
// Project: https://github.com/koajs/cors
// Definitions by: Xavier Stouder <https://github.com/Xstoudi>, Izayoi Ko <https://github.com/izayoiko>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Koa from "koa";

declare function cors(options?: cors.Options): Koa.Middleware;
export = cors;

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
