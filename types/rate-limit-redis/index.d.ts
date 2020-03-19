// Type definitions for rate-limit-redis 1.7
// Project: https://github.com/wyattjoh/rate-limit-redis#readme
// Definitions by: Chris Suich <https://github.com/csuich2>
//                 Connor Love <https://github.com/dotconnor>
//                 Austin Beer <https://github.com/austin-beer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { RedisClient } from 'redis';
import IORedis = require('ioredis');
import { Store } from 'express-rate-limit';

interface RedisStoreOptions {
    expiry?: number;
    prefix?: string;
    resetExpiryOnChange?: boolean;
    client?: RedisClient | IORedis.Redis;
    redisURL?: string;
}

declare var RedisStore: {
    new (options?: RedisStoreOptions): Store;
};

export = RedisStore;
