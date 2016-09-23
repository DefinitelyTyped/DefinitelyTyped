
import compose = require('koa-compose');

var fn1: compose.Middleware = function(context: any, next: () => Promise<void>): Promise<any> {
    return Promise
        .resolve(console.log('in fn1'))
        .then(() => next());
};

var fn2: compose.Middleware = function(context: any, next: () => Promise<void>): Promise<any> {
    return Promise
        .resolve(console.log('in fn2'))
        .then(() => next());
};


var fn = compose([fn1, fn2]);