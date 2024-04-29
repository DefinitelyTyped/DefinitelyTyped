import Koa = require("koa");

const app = new Koa({
    env: "abc",
    keys: ["im a newer secret", "i like turtle"],
    proxy: true,
    subdomainOffset: 2,
    proxyIpHeader: "XYZ-Forwarded-For",
    maxIpsCount: 2,
    asyncLocalStorage: true,
});

app.use(ctx => {
    ctx.body = "Hello World";
});

app.listen(3000);

const server = app.listen();
