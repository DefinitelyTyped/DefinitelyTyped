import koaEtag = require('koa-etag');
import * as Koa from 'koa';

new Koa().use(koaEtag());

new Koa().use(koaEtag({}));

new Koa().use(koaEtag({ weak: true }));
