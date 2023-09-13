// Type definitions for koa-static-cache 5.1
// Project: https://github.com/koajs/static-cache#readme
// Definitions by: JounQin <https://github.com/JounQin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/**
 * Static server for koa.
 */

import { Middleware } from "koa";

declare namespace staticCache {
    interface Files {
        [path: string]: Options;
    }

    interface Options {
        dir?: string | undefined;
        maxAge?: number | undefined;
        cacheControl?: string | undefined;
        buffer?: boolean | undefined;
        gzip?: boolean | undefined;
        usePrecompiledGzip?: boolean | undefined;
        alias?: {} | undefined;
        prefix?: string | undefined;
        dynamic?: boolean | undefined;
        filter?: ((path: string) => boolean) | string[] | undefined;
        preload?: boolean | undefined;
        files?: Files | undefined;
    }
}

declare function staticCache(
    dir: string | staticCache.Options,
    options?: staticCache.Options | staticCache.Files,
    files?: staticCache.Files,
): Middleware;

export = staticCache;
