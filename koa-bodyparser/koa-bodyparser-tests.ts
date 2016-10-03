/// <reference path="../koa/koa.d.ts" />
/// <reference path="koa-bodyparser.d.ts" />

import * as Koa from "koa";
import bodyParser = require("koa-bodyparser");

const app = new Koa();

app.use(bodyParser({ strict: false }));

app.listen(80)