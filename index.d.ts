// Type definitions for fast-ratelimit
// Project: https://github.com/valeriansaliou/node-fast-ratelimit
// Definitions by: Jørgen Vatle <https://github.com/JorgenVatle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Constructor options for fast-ratelimit.
 * {@link https://github.com/valeriansaliou/node-fast-ratelimit#1-create-the-rate-limiter}
 */
export interface FastRateLimitOptions {
    threshold: number;  // available tokens over timespan
    ttl: number;        // time-to-live value of token bucket (in seconds)
}

/**
 * FastRateLimit
 * @class
 * @classdesc  Instanciates a new rate-limiter
 * @param      {object} options
 */
export class FastRateLimit {
    /**
     * FastRateLimit constructor
     * @param options
     */
    constructor(options: FastRateLimitOptions);

    /**
     * FastRateLimit.prototype.consumeSync
     * @public
     * @param  {string}  namespace
     * @return {boolean} Whether tokens remain in current timespan or not
     */
    consumeSync(namespace: string): boolean;

    /**
     * FastRateLimit.prototype.hasTokenSync
     * @public
     * @param  {string}  namespace
     * @return {boolean} Whether tokens remain in current timespan or not
     */
    hasTokenSync(namespace: string): boolean;

    /**
     * FastRateLimit.prototype.consume
     * @public
     * @param  {string} namespace
     * @return {object} Promise object
     */
    consume(namespace: string): Promise<void>

    /**
     * FastRateLimit.prototype.hasToken
     * @public
     * @param  {string} namespace
     * @return {object} Promise object
     */
    hasToken(namespace: string): Promise<void>
}