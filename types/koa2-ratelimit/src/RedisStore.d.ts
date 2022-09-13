import { ClientOpts, RedisClient } from 'redis';

import { RateLimitOptions } from '..';
import Store = require('./Store');

export = RedisStore;

declare class RedisStore extends Store {
    client: RedisClient;

    constructor(config?: ClientOpts);

    incr(key: string, options: RateLimitOptions, weight: number): Promise<{ counter: number; dateEnd: number }>;
    decrement(key: string, options: RateLimitOptions, weight: number): Promise<void>;
    saveAbuse(options: RateLimitOptions & { key: string; ip: string; user_id: any }): void;
}
