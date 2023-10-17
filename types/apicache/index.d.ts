import * as express from "express";
import { RedisClient } from "redis";

export const id: number;

/**
 * clears cache target (key or group), or entire cache if no value passed, returns new index.
 */
export function clear(target: string | any[]): any;

/** used to create a new ApiCache instance with the same options as the current one */
export function clone(): any;

export function getDuration(duration: string | number): any;

/**
 * returns current cache index [of keys]
 */
export function getIndex(): any;

/**
 * Return cache performance statistics (hit rate).  Suitable for putting into a route:
 * <code>
 * app.get('/api/cache/performance', (req, res) => {
 *    res.json(apicache.getPerformance())
 * })
 * </code>
 */
export function getPerformance(): any;

/**
 * the actual middleware that will be used in your routes. duration is in the following format
 * "[length] [unit]", as in "10 minutes" or "1 day". A second param is a middleware toggle function,
 * accepting request and response params, and must return truthy to enable cache for the request.
 * Third param is the options that will override global ones and affect this middleware only.
 */
export function middleware(
    duration?: string | number,
    toggleMiddleware?: any,
    localOptions?: Options,
): any;

/**
 * used to create a new ApiCache instance (by default, simply requiring this library shares a common instance)
 */
export function newInstance(config: Options): any;

/**
 * getter/setter for global options. If used as a setter, this function is
 * chainable, allowing you to do things such as... say... return the middleware.
 */
export function options(options?: Options): any;

export function resetIndex(): void;

export interface Options {
    /** if true, enables console output */
    debug?: boolean | undefined;
    /** should be either a number (in ms) or a string, defaults to 1 hour */
    defaultDuration?: string | undefined;
    /** if false, turns off caching globally (useful on dev) */
    enabled?: boolean | undefined;
    /**
     * if provided, uses the [node-redis](https://github.com/NodeRedis/node_redis) client instead of [memory-cache](https://github.com/ptarjan/node-cache)
     */
    redisClient?: RedisClient | undefined;
    /** if true, req.path will be used as cache key instead of req.url. Defaults to false */
    jsonp?: boolean | undefined;
    /** appendKey takes the req/res objects and returns a custom value to extend the cache key */
    appendKey?: ((req: express.Request, res: express.Response) => string) | Array<(keyof express.Request)> | undefined;
    /** list of headers that should never be cached */
    headerBlacklist?: string[] | undefined;
    statusCodes?: {
        /** list status codes to specifically exclude (e.g. [404, 403] cache all responses unless they had a 404 or 403 status) */
        exclude?: number[] | undefined;
        /** list status codes to require (e.g. [200] caches ONLY responses with a success/200 code) */
        include?: number[] | undefined;
    } | undefined;
    /**
     * 'cache-control':  'no-cache' // example of header overwrite
     */
    headers?: {
        [key: string]: string;
    } | undefined;
    /** Event callbacks */
    events?: {
        /** Expire callback triggered by redis client is used. Defaults to empty function */
        expire: (err: Error | null, reply: number) => void | undefined;
    } | undefined;
    /**
     * enable/disable performance tracking... WARNING: super cool feature, but may cause memory overhead issues
     */
    trackPerformance?: boolean | undefined;
    /**
     * if true, "cache-control: no-cache" header is respected to bypass cache. Defaults to false
     */
    respectCacheControl?: boolean | undefined;
}
