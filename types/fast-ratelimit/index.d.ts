// Type definitions for fast-ratelimit 2.2
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

export class FastRateLimit {
    /**
     * FastRateLimit constructor
     * @param options
     */
    constructor(options: FastRateLimitOptions);

    /**
     * FastRateLimit.prototype.consumeSync
     */
    consumeSync(namespace: string): boolean;

    /**
     * FastRateLimit.prototype.hasTokenSync
     */
    hasTokenSync(namespace: string): boolean;

    /**
     * FastRateLimit.prototype.consume
     */
    consume(namespace: string): Promise<void>;

    /**
     * FastRateLimit.prototype.hasToken
     */
    hasToken(namespace: string): Promise<void>;
}
