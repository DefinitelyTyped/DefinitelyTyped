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

app.use(jwt({
    secret: 'some-secret-key'
}).unless({method: 'OPTIONS'}));

app.use(jwt({
    secret: (header: jwt.TokenHeader): Promise<string> => {
    	return Promise.resolve("some-secret-key");
    }
}));
