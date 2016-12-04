/// <reference path="../koa/koa.d.ts" />
/// <reference path="koa-pug.d.ts" />

import * as koa from "koa";
import * as Pug from "koa-pug";

const httpServer = new koa();
const pug = new Pug();

httpServer.use((ctx: koa.Context, next: () => void) => {
    ctx.body = "Hello, world!";
});

httpServer.listen(3000);