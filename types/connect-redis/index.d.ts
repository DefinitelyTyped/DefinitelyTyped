// Type definitions for connect-redis
// Project: https://npmjs.com/package/connect-redis
// Definitions by: Xavier Stouder <https://github.com/xstoudi>
//                 Albert Kurniawan <https://github.com/morcerf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="express" />
/// <reference types="express-session" />
/// <reference types="redis" />

declare module "connect-redis" {
    import * as express from "express";
    import * as session from "express-session";
    import * as redis from "redis";


    function s(options: (options?: session.SessionOptions) => express.RequestHandler): s.RedisStore;

    namespace s {
        interface RedisStore extends session.Store {
            new (options: RedisStoreOptions): session.Store;
        }
        interface RedisStoreOptions {
            client?: redis.RedisClient;
            host?: string;
            port?: number;
            socket?: string;
            url?: string;
            ttl?: number;
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
