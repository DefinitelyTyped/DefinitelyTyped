import * as Koa from 'koa';
import * as KoaHtmlMinifier from 'koa-html-minifier';

const app = new Koa()
    .use(KoaHtmlMinifier())
    .use(KoaHtmlMinifier({
        collapseWhitespace: true
    }));
