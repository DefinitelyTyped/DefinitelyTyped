// Type definitions for express-brute-redis 0.0
// Project: https://github.com/AdamPflug/express-brute-redis
// Definitions by: Scott Harwell <https://github.com/scottharwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { ClientOpts, RedisClient } from 'redis';

/**
 * @summary Redis store for Express Brute
 */
declare class RedisStore {
    /**
     * @summary constructor
     * @param options Options to configure the Redis client.
     */
    constructor(
        options?: ClientOpts & {
            client?: RedisClient;
            prefix?: string;
            host?: string;
            port?: number | string;
        },
        ...args: any[]
    );

    /**
     * @summary Sets a key in Redis storage.
     */
    set(key: string, value: string, lifetime?: number, callback?: (sender: RedisStore) => void): void;

    /**
     * @summary Gets a key in Redis storage.
     */
    get(key: string, callback?: (err: Error, data: any) => void): string | null;

    /**
     * @summary Resets a key in Redis storage.
     */
    reset(key: string, callback?: (err: Error, data: any) => void, ...args: any[]): void;

    static Redis: any;

    static defaults: {
        prefix: string;
        host: string;
        port: string;
    };
}

export = RedisStore;
