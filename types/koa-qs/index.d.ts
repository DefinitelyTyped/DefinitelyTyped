import * as koa from "koa";

declare namespace koaQs {
    type ParseMode = "extended" | "strict" | "first";
}

declare function koaQs(app: koa, mode?: koaQs.ParseMode): koa;

export = koaQs;
