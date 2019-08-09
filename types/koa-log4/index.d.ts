// Type definitions for koa-log4 2.3
// Project: https://github.com/dominhhai/koa-log4js#readme
// Definitions by: Cr. <https://github.com/a631807682>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.3

import * as Koa from 'koa';
import * as Log4js from 'log4js';

export function koaLogger(logger4js: Log4js.Logger, optionsOrFormat?: Options | string): Koa.Middleware;

export interface Options {
    format?: string;
    level?: Log4js.Level | 'auto';
}

export * from 'log4js';
