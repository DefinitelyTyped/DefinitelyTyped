import Koa = require('koa');
import { Buffer } from 'buffer';
import stream from 'stream';

const app = new Koa();

app.use(ctx => {
    ctx.body = 'Hello World';
});

app.use(ctx => {
    ctx.body = new Buffer();
});

app.use(ctx => {
    ctx.body = {};
});

app.use(ctx => {
    ctx.body = new stream.Readable();
});

app.use(ctx => {
    ctx.body = ['Hello', 'World'];
});

app.use(ctx => {
    ctx.body = null;
});

app.use(ctx => {
    ctx.body = undefined;
});

app.use(ctx => {
    // $ExpectError
    ctx.response.body = 10;
});

app.use(ctx => {
    ctx.response.body = 'Hello World';
});

app.use(ctx => {
    ctx.response.body = new Buffer();
});

app.use(ctx => {
    ctx.response.body = {};
});

app.use(ctx => {
    ctx.response.body = new stream.Readable();
});

app.use(ctx => {
    ctx.response.body = ['Hello', 'World'];
});

app.use(ctx => {
    ctx.response.body = null;
});

app.use(ctx => {
    ctx.response.body = undefined;
});

app.use(ctx => {
    // $ExpectError
    ctx.response.body = 10;
});
