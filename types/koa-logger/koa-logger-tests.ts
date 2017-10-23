import * as koa from 'koa';
import * as logger from 'koa-logger';

const app = new koa();
app.use(logger());
