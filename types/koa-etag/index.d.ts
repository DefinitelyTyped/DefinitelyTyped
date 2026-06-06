import etag = require("etag");
import koa = require("koa");

declare function koaEtag(options?: etag.Options): koa.Middleware;

export = koaEtag;
