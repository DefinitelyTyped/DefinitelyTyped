import koa = require('koa');
import logger = require('koa-pino-logger');
import { Writable } from 'stream';

const app = new koa();
app.use(logger());
app.use(logger(new Writable()));
app.use(logger({stream: new Writable()}));
app.use(logger({genReqId: () => 'foo'}));

app.use((ctx) => {
  ctx.log.info('something else');
  ctx.body = 'hello world';
});
