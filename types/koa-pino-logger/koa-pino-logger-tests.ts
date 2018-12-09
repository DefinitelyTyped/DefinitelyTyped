import koa = require('koa');
import logger = require('koa-pino-logger');

const app = new koa();
app.use(logger());

app.use((ctx) => {
  ctx.log.info('something else');
  ctx.body = 'hello world';
});
