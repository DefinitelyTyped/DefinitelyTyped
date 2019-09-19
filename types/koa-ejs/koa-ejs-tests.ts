import Koa = require('koa');
import render = require('koa-ejs');

const app = new Koa();
render(app, {
    root: 'somedir',
    layout: 'layout',
    viewExt: 'html',
    cache: true,
    async: true,
    debug: true,
    delimiter: ''
});

render.ejs;
