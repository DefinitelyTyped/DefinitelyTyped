import { stores } from "koa-session";
import { ClientOpts } from "redis";

declare namespace redisStore {
    interface RedisOptions extends ClientOpts {
        duplicate?: boolean | undefined;
        client?: any;
    }

    interface RedisSessionStore extends stores {
        client: any;
    }
}

declare function redisStore(options: redisStore.RedisOptions): redisStore.RedisSessionStore;
export = redisStore;
