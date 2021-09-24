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
        type Client = redis.RedisClient | ioRedis.Redis | ioRedis.Cluster;
        interface RedisStore extends session.Store {
            new (options: RedisStoreOptions): RedisStore;
            client: Client;
        }
        interface RedisStoreOptions {
            client?: Client | undefined;
            host?: string | undefined;
            port?: number | undefined;
            socket?: string | undefined;
            url?: string | undefined;
            ttl?: number | string | ((store: RedisStore, sess: session.SessionData, sid: string) => number) | undefined;
            disableTTL?: boolean | undefined;
            disableTouch?: boolean | undefined;
            db?: number | undefined;
            pass?: string | undefined;
            prefix?: string | undefined;
            unref?: boolean | undefined;
            serializer?: Serializer | JSON | undefined;
            logErrors?: boolean | ((error: string) => void) | undefined;
            scanCount?: number | undefined;
        }
        interface Serializer {
            stringify: Function;
            parse: Function;
        }
    }

    export = s;
}
