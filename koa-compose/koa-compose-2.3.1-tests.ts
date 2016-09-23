

import compose = require('koa-compose');

var fn1: compose.Middleware = function *(next: void) {
    console.log('in fn1');
    yield next;
}

var fn2: compose.Middleware = function *(next: void) {
    console.log('in fn2');
    yield next;
}

var fn = compose([fn1, fn2]);