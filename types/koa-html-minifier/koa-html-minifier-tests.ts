import Koa = require('koa');
import koaHtmlMinifier = require('koa-html-minifier');

const app = new Koa();
app.use(koaHtmlMinifier());
app.use(koaHtmlMinifier({ collapseWhitespace: true }));
