import compose = require('koa-compose');

const fn1: compose.Middleware<any> = (context: any, next: () => Promise<void>): Promise<any> =>
    Promise
        .resolve(console.log('in fn1'))
        .then(next);

const fn2: compose.Middleware<any> = (context: any, next: () => Promise<void>): Promise<any> =>
    Promise
        .resolve(console.log('in fn2'))
        .then(next);

const fn = compose([fn1, fn2]);
