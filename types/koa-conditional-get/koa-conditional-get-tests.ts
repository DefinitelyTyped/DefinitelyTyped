import * as Koa from 'koa';
import * as conditional from 'koa-conditional-get';

new Koa().use(conditional());
