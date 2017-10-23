// Type definitions for koa-cache-control 2.0
// Project: https://github.com/DaMouse404/koa-cache-control
// Definitions by: Peter Safranek <https://github.com/pe8ter>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Koa from "koa";

declare function cacheControl(options?: {
    private?: boolean;
    public?: boolean;
    noStore?: boolean;
    noCache?: boolean;
    noTransform?: boolean;
    mustRevalidate?: boolean;
    staleIfError?: number;
    staleWhileRevalidate?: number;
    maxAge?: number;
    sMaxAge?: number;
}): Koa.Middleware;

declare namespace cacheControl {}

export = cacheControl;
