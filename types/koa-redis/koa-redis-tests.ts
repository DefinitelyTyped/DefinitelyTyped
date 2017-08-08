import * as Koa from "koa";
import { MemoryStore, Session } from "koa-generic-session";
import session = require("koa-generic-session");
import redisStore = require("koa-redis");

const app = new Koa();

app.use(session({
    store: redisStore({
      url: 'redis://url:123',
      host: 'redisHost',
      port: 123,
      path: 'redis/path',
      db: '2',
      duplicate: false,
      client: {}
  })
}));

app.listen(80);
