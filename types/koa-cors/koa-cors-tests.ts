import Koa = require('koa');
import KoaCors = require('koa-cors');

const app = new Koa();
app.use(KoaCors());
app.use(KoaCors({}));
app.use(KoaCors({ origin: '*' }));
