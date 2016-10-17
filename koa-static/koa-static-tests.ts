import * as Koa from "koa";
import serve = require("koa-static");

const app = new Koa();

app.use(serve('.',{index:false,defer:false}));

app.listen(80)