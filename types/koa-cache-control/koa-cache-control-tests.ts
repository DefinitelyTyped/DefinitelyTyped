import Koa = require("koa");
import cacheControl = require("koa-cache-control");

const app = new Koa();

app.use(cacheControl());
app.use(cacheControl({}));
app.use(cacheControl({
    private: true,
    public: true,
    noStore: true,
    noCache: true,
    noTransform: true,
    mustRevalidate: true,
    staleIfError: 0,
    staleWhileRevalidate: 0,
    maxAge: 0,
    sMaxAge: 0,
}));
