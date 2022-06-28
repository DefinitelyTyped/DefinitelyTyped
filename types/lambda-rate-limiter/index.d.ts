// Type definitions for lambda-rate-limiter 3.0
// Project: https://github.com/blackflux/lambda-rate-limiter
// Definitions by: BendingBender <https://github.com/bendingbender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = rateLimiterFactory;

/**
 * Initializes the rate limiter.
 *
 * @example
 * import limiterFactory = require('lambda-rate-limiter');
 *
 * const limiter = limiterFactory({
 *   interval: 60000,
 *   uniqueTokenPerInterval: 500,
 * });
 *
 * limiter
 *   .check(10, 'USER_TOKEN') // define maximum of 10 requests per interval
 *   .catch(() => {
 *     // rate limit exceeded: 429
 *   })
 *   .then(() => {
 *     // ok
 *   });
 */
declare function rateLimiterFactory(options?: rateLimiterFactory.Options): rateLimiterFactory.RateLimiter;

declare namespace rateLimiterFactory {
    interface Options {
        /**
         * Rate limit interval in ms, starts on first request.
         *
         * @default 60000
         */
        interval?: number | undefined;
        /**
         * Max unique tokens per interval. Excess causes earliest seen to drop, per instantiation.
         *
         * @default 500
         */
        uniqueTokenPerInterval?: number | undefined;
    }

    interface RateLimiter {
        /**
         * Check whether rate limit was reached.
         *
         * @param limit Max requests per interval.
         * @param token Any token value. Could be the user ip or login.
         */
        check(limit: number, token: string): Promise<number>;
    }
}
