import * as etag from "etag";
import * as koa from "koa";

declare function koaEtag(options?: etag.Options): koa.Middleware;

export = koaEtag;
