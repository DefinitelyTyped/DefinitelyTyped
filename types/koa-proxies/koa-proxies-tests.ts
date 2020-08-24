import Koa = require('koa');
import proxy = require('koa-proxies');

const app = new Koa();

app.use(proxy('/octocat', {
    target: 'https://api.github.com/users',
    changeOrigin: true,
    rewrite: path => path.replace(/^\/octocat(\/|\/\w+)?$/, '/vagusx'),
    logs: true,
    events: {
        error(_err, _req, _res) { },
        proxyReq(_proxyReq, _req, _res) { },
        proxyRes(_proxyRes, _req, _res) { }
    }
}));

app.listen(3000);
