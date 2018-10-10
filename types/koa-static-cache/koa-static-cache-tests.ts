import Koa = require('koa');
import staticCache = require('koa-static-cache');

const app = new Koa();

app.use(staticCache('.'));

app.use(
    staticCache('.', {
        maxAge: 0,
        filter: ['']
    })
);

const files: staticCache.Files = {};

app.use(
    staticCache(
        '.',
        {
            maxAge: 0,
            filter: path => !!path
        },
        files
    )
);

files['/service-worker.js'].maxAge = 0;

app.use(
    staticCache({
        dir: '.',
        maxAge: 0,
        files
    })
);

app.use(
    staticCache(
        {
            dir: '.',
            maxAge: 0
        },
        files
    )
);
