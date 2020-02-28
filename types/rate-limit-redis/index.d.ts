// Type definitions for rate-limit-redis 1.6
// Project: https://github.com/wyattjoh/rate-limit-redis#readme
// Definitions by: Chris Suich <https://github.com/csuich2>
//                 Connor love <https://github.com/dotconnor>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { RedisClient } from 'redis';
import { Store } from 'express-rate-limit';

interface RedisStoreOptions {
    expiry?: number;
    prefix?: string;
    resetExpiryOnChange?: boolean;
    client?: RedisClient;
}

declare var RedisStore: {
    new (options?: RedisStoreOptions): Store;
};

export = RedisStore;
