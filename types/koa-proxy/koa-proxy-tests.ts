import Koa = require('koa');
import proxy = require('koa-proxy');

const app = new Koa();
app.use(proxy({
    host: 'https://api.github.com',
    match: /^\/repos\//
}));
app.listen(3000);
