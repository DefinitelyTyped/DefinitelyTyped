import koa = require('koa');
import logger = require('koa-logger');

const app = new koa();
app.use(logger());
