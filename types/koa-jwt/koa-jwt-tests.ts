import koa = require('koa');
import jwt = require('koa-jwt');

const app = new koa();

app.use(jwt({
    secret: 'some-secret-key'
}));

app.use(jwt({
    secret: 'some-secret-key',
    key: 'auth'
}));
