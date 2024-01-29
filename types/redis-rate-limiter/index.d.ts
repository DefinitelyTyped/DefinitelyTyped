import * as express from "express";
import * as redis from "redis";

declare class RedisRateLimiter {
    public static create(
        options: RedisRateLimiter.Options,
    ): (req: express.Request, callback: (err: Error, res: RedisRateLimiter.Response) => void) => void;
    public static middleware(options: RedisRateLimiter.Options): express.RequestHandler;
}

declare namespace RedisRateLimiter {
    export interface Options {
        redis: redis.RedisClient;
        key: "ip" | ((req: express.Request) => string);
        window?: number | undefined;
        limit?: number | undefined;
        rate?: string | undefined;
        deleteImmediatelyIfRaceCondition?: boolean | undefined;
        onPossibleRaceCondition?: ((key: string) => void) | undefined;
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
