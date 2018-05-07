// Type definitions for express-brute-redis 0.0
// Project: https://github.com/AdamPflug/express-brute-redis
// Definitions by: Scott Harwell <https://github.com/scottharwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ClientOpts } from "redis";

/**
 * @summary Redis store for Express Brute
 */
declare class express_brute_redis {
    /**
     * Default options for the Redis client
     */
    static defaults: ClientOpts;

    /**
     * @summary constructor
     * @param options Options to configure the Redis client.
     */
    constructor(options?: ClientOpts, ...args: any[]);

    /**
     * @summary Sets a key in Redis storage.
     */
    set(key: string, value: string, lifetime?: number, callback?: (sender: express_brute_redis) => void): void;

    /**
     * @summary Gets a key in Redis storage.
     */
    get(key: string, callback?: (err: Error, data: any) => void): void;

    /**
     * @summary Resets a key in Redis storage.
     */
    reset(key: string, callback?: (err: Error, data: any) => void, ...args: any[]): void;
}

export = express_brute_redis;
