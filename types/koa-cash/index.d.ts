import * as Koa from "koa";
declare module "koa" {
    interface BaseContext {
        /**
         * This is how you enable a route to be cached. If you don't call await ctx.cashed(),
         * then this route will not be cached nor will it attempt to serve the request from the cache.
         *
         * Notes:
         * * Only `GET` and `HEAD` requests are cached.
         * * Only 200 responses are cached. Don't set 304 status codes on these routes - this
         *   middleware will handle it for you.
         * * The underlying store should be able to handle Date objects as well as Buffer objects.
         *   Otherwise, you may have to serialize/deserialize yourself.
         * @param maxAge The max age passed to `get()`.
         */
        cashed(maxAge?: number): Promise<boolean>;
        /**
         * This is a special method that you can use to clear the cache for a specific key
         * @param key The cache key you want to invalidate
         */
        cashClear(key: string): void;
    }
}

declare function koaCash(opts?: koaCash.Options): Koa.Middleware;

declare namespace koaCash {
    interface Options {
        /**
         * Default max age (in milliseconds) for the cache if not set via `await ctx.cashed(maxAge)`.
         */
        maxAge?: number | undefined;

        /**
         * Minimum byte size to compress response bodies. Default 1kb.
         * @default 1000
         */
        threshold?: number | undefined;

        /**
         * If a truthy value is passed, then compression will be enabled.
         * @default false
         */
        compression?: boolean | undefined;

        /**
         * If a truthy value is passed, then X-Cached-Response header will be set as HIT when response
         * is served from the cache.
         * @default false
         */
        setCachedHeader?: boolean | undefined;

        /**
         * A hashing function. By default, it caches based on the URL.
         * @default
         * ```
         * function hash(ctx) {
         *   return ctx.response.url; // same as ctx.url
         * }
         * ```
         */
        hash?(ctx: Koa.Context): string;

        /**
         * Get a value from a store. Must return a Promise, which returns the cache's value, if any.
         * @param key Cache key
         * @param maxAge Max age (in milliseconds) for the cache
         */
        get(key: string, maxAge: number): Promise<unknown | undefined>;

        /**
         * Set a value to a store. Must return a Promise.\
         * Note: `maxAge` is set by `.cash = { maxAge }`. If it's not set, then `maxAge` will be `0`,
         * which you should then ignore.
         * @param key Cache key
         * @param value Cached value
         * @param maxAge Max age (in milliseconds) for the cache
         */
        set(key: string, value: unknown, maxAge: number): Promise<void>;
    }
}

export = koaCash;
