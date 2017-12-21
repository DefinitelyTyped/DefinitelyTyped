import * as koa from 'koa';
import * as logger from 'koa-pino-logger';

const app = new koa();
app.use(logger());
