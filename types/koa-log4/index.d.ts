import * as Koa from "koa";
import * as Log4js from "log4js";

export function koaLogger(logger4js: Log4js.Logger, optionsOrFormat?: Options | string): Koa.Middleware;

export interface Options {
    format?: string | undefined;
    level?: Log4js.Level | "auto" | undefined;
}

export * from "log4js";
