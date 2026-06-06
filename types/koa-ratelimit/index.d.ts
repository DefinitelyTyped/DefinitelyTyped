import { Redis } from "ioredis";
import { Context, Middleware } from "koa";

declare function KoaRatelimit(options?: KoaRatelimit.MiddlewareOptions): Middleware;

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
         * Driver to use ("redis" or "memory").
         */
        driver: "redis" | "memory";

        /**
         * The database powering the backing rate-limiter package.
         */
        db: Redis | Map<any, any>;

        /**
         * The length of a single limiting period. This value is expressed
         * in milliseconds, defaulting to one hour.
         */
        duration?: number | undefined;

        /**
         * The maximum amount of requests a client (see the `id` field) may
         * make during a limiting period. (see `duration`)
         */
        max?: number | undefined;

        /**
         * Get the unique-identifier for a request. This defaults to the
         * client's IP address. Returning "false" will skip rate-limiting.
         */
        id?: ((context: Context) => string | false) | undefined;

        /**
         * Specify a prefix for the storage driver to use when creating key names.
         */
        namespace?: string | undefined;

        /**
         * Whether or not to disable the usage of rate limit headers. This defaults
         * to **false**.
         */
        disableHeader?: boolean | undefined;

        /**
         * The message used on the response body if a client is rate-limited. There is
         * a default message; which includes when they should try again.
         */
        errorMessage?: string | undefined;

        /**
         * Whether or not to throw an error upon being rate-limited. This uses
         * the Koa context function "throw".
         */
        throw?: boolean | undefined;

        /**
         * A relation of header to the header's display name.
         */
        headers?: HeaderNameOptions | undefined;

        /**
         * If function returns true, middleware exits before limiting
         */
        whitelist?: ((context: Context) => boolean | Promise<boolean>) | undefined;

        /**
         * If function returns true, 403 error is thrown
         */
        blacklist?: ((context: Context) => boolean | Promise<boolean>) | undefined;
    }
}

export = KoaRatelimit;
