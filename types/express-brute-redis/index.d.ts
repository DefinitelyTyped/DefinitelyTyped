// Project: https://github.com/AdamPflug/express-brute-redis
// Definitions by: Scott Harwell <https://github.com/scottharwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4.2

import redis = require("redis");

/**
 * @summary Redis store for Express Brute
 * @class
 */
declare class ExpressBruteRedis {
    /**
     * Default options for the Redis client
     */
    public static defaults: redis.ClientOpts;

    /**
     * @summary constructor
     * @param options Options to configure the Redis client.
     */
    constructor(options?: redis.ClientOpts, ...args: any[]);

    /**
     * @summary Sets a key in Redis storage.
     * @param key 
     * @param value 
     * @param lifetime 
     * @param callback 
     */
    public set(key: string, value: string, lifetime?: number, callback?: SetCallback): void;

    /**
     * @summary Gets a key in Redis storage.
     * @param key 
     * @param callback 
     */
    public get(key: string, callback?: GetCallback): void;

    /**
     * @summary Resets a key in Redis storage.
     * @param key 
     * @param callback 
     */
    public reset(key: string, callback?: ResetCallback, ...args: any[]): void;
}

declare interface SetCallback { (sender?: ExpressBruteRedis): void }
declare interface GetCallback { (err?: Error, data?: any): void }
declare interface ResetCallback { (err?: Error, data?: any): void }

export = ExpressBruteRedis;
