import koaResponseTime = require('koa-response-time');
import Koa = require('koa');

new Koa().use(koaResponseTime());
