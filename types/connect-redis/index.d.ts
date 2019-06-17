// Type definitions for connect-redis
// Project: https://npmjs.com/package/connect-redis
// Definitions by: Xavier Stouder <https://github.com/xstoudi>
//				   Seth Butler <https://github.com/sbutler2901>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="express" />
/// <reference types="express-session" />
/// <reference types="ioredis" />
/// <reference types="redis" />

declare module "connect-redis" {
    import * as express from "express";
    import * as ioredis from "ioredis";
    import * as session from "express-session";
    import * as redis from "redis";


    function s(options: (options?: session.SessionOptions) => express.RequestHandler): s.RedisStore;

    namespace s {
        type RedisClient = redis.RedisClient | ioredis.Redis;

        interface RedisStore<T extends RedisClient = redis.RedisClient> extends session.Store {
            new <T extends RedisClient = redis.RedisClient>(options: RedisStoreOptions<T>): RedisStore<T>;
            client: T;
        }
        interface RedisStoreOptions<T extends RedisClient> {
            client?: T;
            host?: string;
            port?: number;
            socket?: string;
            url?: string;
            ttl?: number | string | ((store: RedisStore, sess: Express.SessionData, sid: string) => number);
            disableTTL?: boolean;
            db?: number;
            pass?: string;
            prefix?: string;
            unref?: boolean;
            serializer?: Serializer | JSON;
            logErrors?: boolean | ((error: string) => void);
            scanCount?: number;
        }
        interface Serializer {
            stringify: Function;
            parse: Function;
        }
    }

    export = s;
}
