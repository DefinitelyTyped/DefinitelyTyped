// Type definitions for koa2-ratelimit 0.9
// Project: https://github.com/ysocorp/koa2-ratelimit
// Definitions by: Ovyerus <https://github.com/Ovyerus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 4.1

import { Context } from 'koa';
import MemoryStore = require('./src/MemoryStore');
import MongodbStore = require('./src/MongodbStore');
import RateLimit = require('./src/RateLimit');
import RedisStore = require('./src/RedisStore');
import SequelizeStore = require('./src/SequelizeStore');
import Store = require('./src/Store');

export = Koa2Ratelimit;

declare const Koa2Ratelimit: {
    RateLimit: typeof RateLimit;
    Stores: {
        Memory: typeof MemoryStore;
        Sequelize: typeof SequelizeStore;
        Mongodb: typeof MongodbStore;
        Redis: typeof RedisStore;
        Store: typeof Store;
    };
};

declare namespace Koa2Ratelimit {
    type TimeKey = 'ms' | 'sec' | 'min' | 'hour' | 'day' | 'week' | 'month' | 'year';
    type TimeKeyObject = {
        [key in TimeKey]?: number;
    };

    interface RateLimitOptions {
        interval: TimeKeyObject | number;
        delayAfter: number;
        timeWait: TimeKeyObject | number;
        max: number;

        message: string;
        statusCode: number;
        headers: boolean;
        skipFailedRequests: boolean;
        prefixKey: string;

        store: Store;

        keyGenerator(ctx: Context): Promise<string>;
        skip(ctx: Context): Promise<boolean>;
        getUserId(ctx: Context): Promise<any>;
        handler(ctx: Context): Promise<void>;
        onLimitReached(ctx: Context): Promise<void>;
        weight(ctx: Context): Promise<number>;

        whitelist: string[];
    }
}
