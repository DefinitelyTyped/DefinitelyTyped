import koa = require('koa');
import logger = require('koa-logger-winston');
import { createLogger } from 'winston';

const app = new koa();
app.use(logger(createLogger()));
