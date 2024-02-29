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
    proxyRevalidate?: boolean;
}): Koa.Middleware;

declare namespace cacheControl {}

export = cacheControl;
