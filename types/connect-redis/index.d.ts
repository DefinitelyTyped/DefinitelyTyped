// Type definitions for connect-redis
// Project: https://npmjs.com/package/connect-redis
// Definitions by: Xavier Stouder <https://github.com/xstoudi>
//                   Seth Butler <https://github.com/sbutler2901>
//                 Jip Sterk <https://github.com/JipSterk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="express" />
/// <reference types="express-session" />
/// <reference types="redis" />

declare module 'connect-redis' {
    import * as express from 'express';
    import * as session from 'express-session';
    import * as ioRedis from 'ioredis';
    import * as redis from 'redis';

    function s(options: (options?: session.SessionOptions) => express.RequestHandler): s.RedisStore;

    namespace s {
        interface RedisStore extends session.Store {
            new (options: RedisStoreOptions): RedisStore;
            client: redis.RedisClient | ioRedis.Redis;
        }
        interface RedisStoreOptions {
            client?: redis.RedisClient | ioRedis.Redis;
            host?: string;
            port?: number;
            socket?: string;
            url?: string;
            ttl?: number | string | ((store: RedisStore, sess: Express.SessionData, sid: string) => number);
            disableTTL?: boolean;
            disableTouch?: boolean;
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
