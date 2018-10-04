// Type definitions for koa-ratelimit 4.1
// Project: https://github.com/koajs/ratelimit#readme
// Definitions by: Ben Watkins <https://github.com/OutdatedVersion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Middleware, Context } from "koa";
import { RedisClient } from "redis";

declare function ratelimit(options?: KoaRatelimit.MiddlewareOptions): Middleware;

declare namespace KoaRatelimit {
    interface HeaderNameOptions {
        /**
         * The amount of requests remaining in the current limiting period.
         */
        remaining: string;

        /**
         * The time, expressed as a UNIX epoch timestamp, at which your rate-limit expires.
         */
        reset: string;

        /**
         * The total amount of requests a client may make during a limiting period.
         */
        total: string;
    }

    interface MiddlewareOptions {
        /**
         * The database powering the backing rate-limiter package.
         */
        db: RedisClient;

        /**
         * The length of a single limiting period. This value is expressed
         * in milliseconds, defaulting to one hour.
         */
        duration?: number;

        /**
         * The maximum amount of requests a client (see the `id` field) may
         * make during a limiting period. (see `duration`)
         */
        max?: number;

        /**
         * Get the unique-identifier for a request. This defaults to the
         * client's IP address. Returning "false" will skip rate-limiting.
         */
        id?: (context: Context) => string | false;

        /**
         * Whether or not to disable the usage of rate limit headers. This defaults
         * to **false**.
         */
        disableHeader?: boolean;

        /**
         * The message used on the response body if a client is rate-limited. There is
         * a default message; which includes when they should try again.
         */
        errorMessage?: string;

        /**
         * Whether or not to throw an error upon being rate-limited. This uses
         * the Koa context function "throw".
         */
        throw?: boolean;

        /**
         * A relation of header to the header's display name.
         */
        headers?: HeaderNameOptions;
    }
}

export = ratelimit;
