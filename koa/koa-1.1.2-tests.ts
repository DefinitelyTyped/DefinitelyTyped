

import * as Koa from 'koa';
var app = new Koa();

// logger

app.use(function *(next: Function) {
    // at present, we can not typing 'this' in function
    // but there is a proposal: https://github.com/Microsoft/TypeScript/issues/3694
    var ctx: Koa.Context = this;

    var start = new Date;
    yield next;
    var ms = <any>new Date - <any>start;
    console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

// response

app.use(function *(): Iterable<void> {
    var ctx: Koa.Context = this;
    ctx.body = 'Hello World';
});

app.listen(3000);
