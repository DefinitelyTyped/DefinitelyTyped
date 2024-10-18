import * as Koa from "koa";
import * as Redis from "redis";

type onErrorCallback = (error: Error) => void;

type getPrefixCallback = (ctx: Koa.Context) => string;

declare namespace cache {
    interface CacheOptions {
        /**
         * redis key prefix, default is koa-redis-cache:
         * If a function is supplied, its signature should be function(ctx) {} and it should return a string to use as the redis key prefix
         */
        prefix?: string | getPrefixCallback | undefined;

        /**
         * redis expire time (second), default is 30 * 60 (30 min)
         */
        expire?: number | undefined;

        /**
         * if the passParam exists in the query string, skip the cache
         */
        passParam?: string | undefined;

        /**
         * max length of body size (in bytes) to cache.
         * if the size of the body exceeds maxLength, the body will not be cached.
         * default is: Infinity
         */
        maxLength?: number | undefined;

        /**
         * the routes to cache, default is ['(.*)'].
         * can be set to an array of routes (string), or an array of RouteOptions
         */
        routes?: RouteOptions[] | string[] | undefined;

        /**
         * the routes to exclude, default is [].
         * example: ['/api/(.*)', '/view/:id']
         */
        exclude?: string[] | undefined;

        /**
         * callback function for error, default is function() {}
         */
        onerror?: onErrorCallback | undefined;

        /**
         * redis options
         */
        redis?: RedisOptions | undefined;
    }

    interface RouteOptions {
        /**
         * the route to cache, example: '/api/(.*)'
         */
        route: string;

        /**
         * expiration time in seconds for cached responses for the route
         */
        expire?: number | undefined;
    }

    interface RedisOptions {
        /**
         * host name of the redis server, default: 'localhost'
         */
        host?: string | undefined;

        /**
         * port number of the redis server, default: 6379
         */
        port?: number | undefined;

        /**
         * node_redis options
         */
        options?: Redis.ClientOpts | undefined;
    }
}

declare function cache(opts?: cache.CacheOptions): Koa.Middleware;

export = cache;
