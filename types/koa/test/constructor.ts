import Koa = require("koa");
import assert from "node:assert/strict";
import { AsyncLocalStorage } from "node:async_hooks";

{
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
}

{
    const asyncLocalStorage = new AsyncLocalStorage<Koa.Context>();
    const app = new Koa({ asyncLocalStorage });

    assert(app.currentContext === undefined);

    app.use(async (ctx, next) => {
        callSomeFunction();
        ctx.body = "ok";
        await next();
    });

    function callSomeFunction() {
        const ctx = asyncLocalStorage.getStore();
        assert(ctx === app.currentContext);
    }

    app.listen();
}
