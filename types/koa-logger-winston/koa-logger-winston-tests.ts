import koa = require('koa');
import logger = require('koa-logger-winston');
import * as winston from 'winston';

const app = new koa();
app.use(logger(new winston.Logger()));
