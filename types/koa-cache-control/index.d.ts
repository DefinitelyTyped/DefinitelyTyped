// Type definitions for koa-cache-control 2.0
// Project: https://github.com/DaMouse404/koa-cache-control
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Koa from "koa";

declare function cacheControl(options?: {
    private?: boolean | undefined;
    public?: boolean | undefined;
    noStore?: boolean | undefined;
    noCache?: boolean | undefined;
    noTransform?: boolean | undefined;
    mustRevalidate?: boolean | undefined;
    staleIfError?: number | undefined;
    staleWhileRevalidate?: number | undefined;
    maxAge?: number | undefined;
    sMaxAge?: number | undefined;
}): Koa.Middleware;

declare namespace cacheControl {}

export = cacheControl;
