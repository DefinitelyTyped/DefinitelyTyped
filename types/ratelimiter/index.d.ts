// Type definitions for ratelimiter 3.4
// Project: https://github.com/tj/node-ratelimiter
// Definitions by: Aya Morisawa <https://github.com/AyaMorisawa>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface RedisClient {
    multi(operations: any[][]): { exec(cb: (err: any, res: any) => unknown): void };
}

declare class Limiter {
    constructor(opts: Limiter.LimiterOption);

    /**
     * Inspect implementation
     */
    inspect(): string;

    /**
     * Get values and header / status code and invoke `fn(err, info)`.
     */
    get(fn: (err: any, info: Limiter.LimiterInfo) => void): void;
}

declare namespace Limiter {
    interface LimiterOption {
        /**
         * The identifier to limit against (typically a user id)
         */
        id: string;

        /**
         * Redis connection instance
         */
        db: RedisClient;

        /**
         * Max requests within duration
         * @default 2500
         */
        max?: number;

        /**
         * Duration of limit in milliseconds
         * @default 3600000
         */
        duration?: number;
    }

    /**
     * Result Object
     */
    interface LimiterInfo {
        /**
         * `max` value
         */
        total: number;

        /**
         * number of calls left in current `duration` without decreasing current `get`
         */
        remaining: number;

        /**
         * time since epoch in seconds at which the rate limiting period will end (or already ended)
         */
        reset: number;

        /**
         * time since epoch in milliseconds at which the rate limiting period will end (or already ended)
         */
        resetMs: number;
    }
}

export = Limiter;
