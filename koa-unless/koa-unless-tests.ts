import koa = require('koa');
import unless = require('koa-unless');

const app = new koa();

const skippedMiddleware: unless.Middleware = function *() {
    throw new Error('Should not be executed');
};

skippedMiddleware.unless = unless;

app.use(skippedMiddleware.unless({
    path: '/some-url',
    ext: [ 'png', 'jpg' ],
    method: [ 'options', 'delete' ],
    useOriginalUrl: true,
    custom: function() {
        return false;
    }
}));

const anotherSkippedMiddleware: unless.Middleware = function *() {
    throw new Error('Should not be executed');
};

anotherSkippedMiddleware.unless = unless;

app.use(anotherSkippedMiddleware.unless({
    path: [ '/index', '/about' ],
    ext: 'bmp',
    method: 'get',
    useOriginalUrl: false,
    custom: function() {
        return false;
    }
}));

const lastSkippedMiddleware: unless.Middleware = function *() {
    throw new Error('Should not be executed');
};

lastSkippedMiddleware.unless = unless;

app.use(lastSkippedMiddleware.unless(function() {
    return false;
}));
