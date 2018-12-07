// Type definitions for koa2-session-redis 0.0
// Project: https://github.com/lonord/koa2-session-redis
// Definitions by: Dima Mukhin <https://github.com/DimaMukhin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as Redis from 'redis';
import * as session from 'koa-session';

export = RedisStore;

declare class RedisStore implements session.stores {
    constructor(config?: Redis.ClientOpts);

    /**
     * get session object by key
     */
    get(key: string): any;

    /**
     * set session object for key, with a maxAge (in ms)
     */
    set(key: string, sess: Partial<session.Session> & { _expire?: number, _maxAge?: number }, maxAge: session.opts["maxAge"]): any;

    /**
     * destroy session for key
     */
    destroy(key: string): any;

    /**
     * sends the quit command to the redis server and ends cleanly right after all running commands were properly handled
     */
    quit(): void;
}
