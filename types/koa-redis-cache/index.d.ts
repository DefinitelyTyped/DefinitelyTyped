// Type definitions for koa-redis-cache 3.0
// Project: https://github.com/coderhaoxin/koa-redis-cache
// Definitions by: Dima Mukhin <https://github.com/dimamukhin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

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
        prefix?: string | getPrefixCallback;

        /**
         * redis expire time (second), default is 30 * 60 (30 min)
         */
        expire?: number;

        /**
         * if the passParam exists in the query string, skip the cache
         */
        passParam?: string;

        /**
         * max length of body size (in bytes) to cache.
         * if the size of the body exceeds maxLength, the body will not be cached.
         * default is: Infinity
         */
        maxLength?: number;

        /**
         * the routes to cache, default is ['(.*)'].
         * can be set to an array of routes (string), or an array of RouteOptions
         */
        routes?: RouteOptions[] | string[];

        /**
         * the routes to exclude, default is [].
         * example: ['/api/(.*)', '/view/:id']
         */
        exclude?: string[];

        /**
         * callback function for error, default is function() {}
         */
        onerror?: onErrorCallback;

        /**
         * redis options
         */
        redis?: RedisOptions;
    }

    interface RouteOptions {
        /**
         * the route to cache, example: '/api/(.*)'
         */
        route: string;

        /**
         * expiration time in seconds for cached responses for the route
         */
        expire?: number;
    }

    interface RedisOptions {
        /**
         * host name of the redis server, default: 'localhost'
         */
        host?: string;

        /**
         * port number of the redis server, default: 6379
         */
        port?: number;

        /**
         * node_redis options
         */
        options?: Redis.ClientOpts;
    }
}

declare function cache(opts?: cache.CacheOptions): Koa.Middleware;

export = cache;
