import Koa = require('koa');
import jsonp = require('koa-safe-jsonp');

const app = new Koa();

jsonp(app);

jsonp(app, {
    callback: '_callback',
    limit: 50,
});
