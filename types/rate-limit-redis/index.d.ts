// Type definitions for rate-limit-redis 1.7
// Project: https://github.com/wyattjoh/rate-limit-redis#readme
// Definitions by: Chris Suich <https://github.com/csuich2>
//                 Connor Love <https://github.com/dotconnor>
//                 Austin Beer <https://github.com/austin-beer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { RedisClient } from 'redis';
import IORedis = require('ioredis');
import { Store, StoreIncrementCallback } from 'express-rate-limit';

declare namespace RedisStore {
    interface Options {
        expiry?: number;
        prefix?: string;
        resetExpiryOnChange?: boolean;
        client?: RedisClient | IORedis.Redis;
        redisURL?: string;
    }
}

declare class RedisStore implements Store {
    constructor(options?: RedisStore.Options);
    incr(key: string, cb: StoreIncrementCallback): void;
    decrement(key: string): void;
    resetKey(key: string): void;
    // rate-limit-redis 1.7.0 doesn't actually implement resetAll() and
    // express-rate-limit 5.1.1 doesn't actually call it, but it's required by
    // the Store interface so it's included here.
    resetAll(): void;
}

export = RedisStore;
