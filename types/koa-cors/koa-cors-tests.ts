import * as Koa from 'koa';
import * as KoaCors from 'koa-cors';

new Koa()
    .use(KoaCors())
    .use(KoaCors({}))
    .use(KoaCors({ origin: '*' }));
