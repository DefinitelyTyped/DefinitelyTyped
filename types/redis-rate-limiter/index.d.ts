// Type definitions for redis-rate-limiter 1.0.3
// Project: https://github.com/TabDigital/redis-rate-limiter
// Definitions by: Seth Westphal <https://github.com/westy92>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as express from 'express';
import * as redis from 'redis';

declare class RedisRateLimiter {
    public static create(options: RedisRateLimiter.Options):
        (req: express.Request, callback: (err: Error, res: RedisRateLimiter.Response) => void) => void;
    public static middleware(options: RedisRateLimiter.Options): express.RequestHandler;
}

declare namespace RedisRateLimiter {
    export interface Options {
        redis: redis.RedisClient;
        key: 'ip' | ((req: express.Request) => string);
        window?: number;
        limit?: number;
        rate?: string;
    }

    export interface Response {
        key: string;
        current: number;
        limit: number;
        window: number;
        over: boolean;
    }
}

export = RedisRateLimiter;