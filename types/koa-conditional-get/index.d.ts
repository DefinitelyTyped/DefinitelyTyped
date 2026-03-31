import koa = require("koa");

declare function koaConditionalGet(): koa.Middleware;

export = koaConditionalGet;
