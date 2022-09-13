import koaQs = require('koa-qs');
import Koa = require('koa');

const app = koaQs(new Koa());

app.listen(80);
