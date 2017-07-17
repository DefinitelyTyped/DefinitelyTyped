// Type definitions for koa-redis 3.0
// Project: https://github.com/koajs/koa-redis
// Definitions by: Nick Simmons <https://github.com/nsimmons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {ClientOpts} from 'redis';
import {SessionStore} from 'koa-generic-session';

declare namespace redisStore {
    interface RedisOptions extends ClientOpts {
        duplicate?: boolean;
        client?: any;
    }
}

declare function redisStore(options: redisStore.RedisOptions): SessionStore;
export = redisStore;
