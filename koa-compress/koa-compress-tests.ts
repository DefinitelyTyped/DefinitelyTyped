/// <reference path="../koa/koa.d.ts" />
/// <reference path="koa-compress.d.ts" />

import * as Koa from "koa";
import compress = require("koa-compress");

const app = new Koa();

app.use(compress({
    filter: (ctype) => {
        return /text/i.test(ctype)
    },
    threshold: 2048
}));

app.listen(80)