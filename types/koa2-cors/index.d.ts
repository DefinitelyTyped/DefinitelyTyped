// Type definitions for koa2-cors 2.0
// Project: https://github.com/zadzbw/koa2-cors#readme
// Definitions by: xialeistudio <https://github.com/xialeistudio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from 'koa';
declare namespace cors {
    interface Options {
        origin?: string | ((ctx: Koa.Context) => boolean | string) | undefined;
        exposeHeaders?: string[] | undefined;
        maxAge?: number | undefined;
        credentials?: boolean | undefined;
        allowMethods?: string[] | undefined;
        allowHeaders?: string[] | undefined;
    }
}

declare function cors(options?: cors.Options): Koa.Middleware;

export = cors;
