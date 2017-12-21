import * as koa from 'koa';
import * as logger from 'koa-logger-winston';
import * as winston from 'winston';

const app = new koa();
app.use(logger(new winston.Logger()));
