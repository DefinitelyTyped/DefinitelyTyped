import koa = require('koa');
import logger = require('koa-pino-logger');

const app = new koa();
app.use(logger());
