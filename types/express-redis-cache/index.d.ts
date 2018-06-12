// Type definitions for express-redis-cache 1.1
// Project: https://github.com/rv-kip/express-redis-cache
// Definitions by: AJ Livingston <https://github.com/ajliv>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { EventEmitter } from 'events';
import { RequestHandler, Request, Response } from 'express';
import { RedisClient } from 'redis';

declare module 'express-serve-static-core' {
    interface Response {
        express_redis_cache_name?: string;
        use_express_redis_cache?: boolean;
    }
}

declare function expressRedisCache(options?: expressRedisCache.Options): expressRedisCache.ExpressRedisCache;
declare namespace expressRedisCache {
    class ExpressRedisCache extends EventEmitter {
        constructor(options?: Options);
        static init(options?: Options): ExpressRedisCache;
        readonly FOREVER: number;
        options: Options;
        host: string;
        port: string | number;
        prefix: string;
        auth_pass: string;
        connected: boolean;
        expire: number;
        client: RedisClient;
        add(name: string, body: string, options: AddOptions, callback: (error: any, added: Entry) => void): void;
        add(name: string, body: string, callback: (error: any, added: Entry) => void): void;
        del(name: string, callback: (error: any, deleted: number) => void): void;
        get(name: string, callback: (error: any, entries: Entry[]) => void): void;
        get(callback: (error: any, entries: Entry[]) => void): void;
        route(nameOrOptions: string | RouteOptions, expire?: ExpireOption): RequestHandler;
        route(expire?: number): RequestHandler;
        size(callback: (error: any, bytes: number) => void): void;
    }

    interface AddOptions {
        type?: string;
        expire?: number;
    }

    interface Entry {
        body: string;
        touched: number;
        expire: number;
        type: string;
    }

    interface ExpirationConfig {
        [statusCode: string]: number;
        [statusCode: number]: number;
    }

    type ExpireOption = number | ExpirationConfig;
    type ExpirationPolicy = (req: Request, res: Response) => number;

    interface Options {
        auth_pass?: string;
        client?: RedisClient;
        expire?: number;
        host?: string;
        port?: string | number;
        prefix?: string;
    }

    interface RouteOptions {
        name?: string;
        expire?: ExpireOption | ExpirationPolicy;
        binary?: boolean;
    }
}

export = expressRedisCache;
