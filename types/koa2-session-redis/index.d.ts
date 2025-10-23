import * as session from "koa-session";
import * as Redis from "redis";

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
    set(
        key: string,
        sess: Partial<session.Session> & { _expire?: number | undefined; _maxAge?: number | undefined },
        maxAge: session.opts["maxAge"],
    ): any;

    /**
     * destroy session for key
     */
    destroy(key: string): any;

    /**
     * sends the quit command to the redis server and ends cleanly right after all running commands were properly handled
     */
    quit(): void;
}
