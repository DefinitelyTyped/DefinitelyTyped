import Koa = require('koa');
import proxy = require('koa-proxy');

const app = new Koa();

app.use(proxy({
    host: 'https://api.github.com',
    match: /^\/repos\//
}));

app.use(proxy({
    host: 'https://api.github.com',
    map: (path) => `/mapped/${path}`
}));

app.use(proxy({
    host: 'https://api.github.com',
    map: {
        '/foo/bar': '/repos'
    }
}));

app.use(proxy({
    host: 'https://api.github.com',
    encoding: 'gbk'
}));

app.listen(3000);
