import { Middleware } from "koa";

declare namespace rateLimit {
    interface Options {
        readonly duration?: number | undefined;
        readonly max?: number | undefined;
        readonly prefix?: string | undefined;
        readonly store?: any; // lru-cache ?
        readonly rate?: number | undefined;
        readonly id?: string | undefined;
        readonly headers?: {
            readonly remaining?: string | undefined;
            readonly reset?: string | undefined;
            readonly total?: string | undefined;
        } | undefined;
        readonly errorMessage?: string | undefined;
    }
}

declare function rateLimit(options?: rateLimit.Options): Middleware;

export = rateLimit;
