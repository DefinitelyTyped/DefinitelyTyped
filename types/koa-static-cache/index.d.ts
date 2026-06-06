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
