import * as session from 'koa-session';
import * as Koa from 'koa';
import RedisStore = require('koa2-session-redis');

const app = new Koa();

const CONFIG = {
    store: new RedisStore({
        host: '127.0.0.1',
        port: 6379,
        max_attempts: 0
    })
};

app.use(session(CONFIG, app));
