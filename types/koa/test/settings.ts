// Tests for application settings. https://github.com/koajs/koa/blob/master/docs/api/index.md#settings

import Koa = require("koa");

const app = new Koa();

app.env = "development";

app.keys = ["im a newer secret", "i like turtle"];

app.proxy = true;

app.subdomainOffset = 2;

app.proxyIpHeader = "X-Forwarded-For";

app.maxIpsCount = 0;

app.use(ctx => {
    ctx.body = "Hello World";
});

app.listen(3000);

const server = app.listen();
