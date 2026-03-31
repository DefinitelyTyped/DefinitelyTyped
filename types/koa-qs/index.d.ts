import koa = require("koa");
import qs = require("qs");

declare namespace koaQs {
    type ParseMode = "extended" | "strict" | "first";
}

declare function koaQs(app: koa, mode?: koaQs.ParseMode, options?: qs.IParseOptions): koa;

export = koaQs;
