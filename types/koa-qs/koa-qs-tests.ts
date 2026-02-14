import koaQs = require("koa-qs");
import Koa = require("koa");

const app = koaQs(new Koa());

app.listen(80);

const appWithOptions = koaQs(new Koa(), "extended", { arrayLimit: 50 });

appWithOptions.listen(80);
