import Koa = require('koa');
import koaCors = require('koa-cors');

const app = new Koa();
app.use(koaCors());
app.use(koaCors({ origin: '*' }));
