import koaEtag = require('koa-etag');
import Koa = require('koa');

new Koa().use(koaEtag());

new Koa().use(koaEtag({}));

new Koa().use(koaEtag({ weak: true }));
