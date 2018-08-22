import Koa = require('koa');
import KoaHtmlMinifier = require('koa-html-minifier');

const app = new Koa();
app.use(KoaHtmlMinifier());
app.use(KoaHtmlMinifier({ collapseWhitespace: true }));
