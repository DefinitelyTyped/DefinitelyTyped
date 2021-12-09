import Koa = require('koa');
import render = require('koa-ejs');
import * as ejs from 'ejs';

const app = new Koa();
render(app, {
    root: 'somedir',
    layout: 'layout',
    viewExt: 'html',
    cache: true,
    async: true,
    debug: true,
    delimiter: '',
    writeResp: true,
});

const ejsRenderer: typeof ejs = render.ejs;
ejsRenderer.compile('some string');
ejsRenderer.render('some string');
