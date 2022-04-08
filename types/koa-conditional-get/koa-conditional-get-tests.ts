import Koa = require('koa');
import conditional = require('koa-conditional-get');

new Koa().use(conditional());
