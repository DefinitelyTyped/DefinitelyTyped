// Type definitions for koa-redis-cache 3.0.1
// Project: https://github.com/coderhaoxin/koa-redis-cache
// Definitions by: Dima Mukhin <https://github.com/dimamukhin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Koa from "koa";
import * as Redis from "redis";

type onErrorCallback = (error: Error) => void;

type getPrefixCallback = (ctx: Koa.Context) => String;

declare namespace cache {
    interface CacheOptions {
        /**
         * redis key prefix, default is koa-redis-cache:
         * If a function is supplied, its signature should be function(ctx) {} and it should return a string to use as the redis key prefix
         */
        prefix?: String | getPrefixCallback;

        /**
         * redis expire time (second), default is 30 * 60 (30 min)
         */
        expire?: Number;

        /**
         * if the passParam exists in the query string, skip the cache
         */
        passParam?: String;

        /**
         * max length of body size (in bytes) to cache.
         * if the size of the body exceeds maxLength, the body will not be cached.
         * default is: Infinity
         */
        maxLength?: Number;

        /**
         * the routes to cache, default is ['(.*)'].
         * can be set to an array of routes (String), or an array of RouteOptions
         */
        routes?: Array<RouteOptions> | Array<String>;

        /**
         * the routes to exclude, default is [].
         * example: ['/api/(.*)', '/view/:id']
         */
        exclude?: Array<String>;

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
        route: String;

        /**
         * expiration time in seconds for cached responses for the route
         */
        expire?: Number;
    }

    interface RedisOptions {
        /**
         * host name of the redis server, default: 'localhost'
         */
        host?: String,

        /**
         * port number of the redis server, default: 6379
         */
        port?: Number,

        /**
         * node_redis options
         */
        options?: Redis.ClientOpts
    }
}

declare function cache(opts?: cache.CacheOptions): Koa.Middleware;

export = cache;
