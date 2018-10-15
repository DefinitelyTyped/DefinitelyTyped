// Type definitions for koa-bunyan-logger 2.0
// Project: https://github.com/koajs/bunyan-logger
// Definitions by: Steven McDowall <https://github.com/sjmcdowall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Middleware } from 'koa';

import Logger = require('bunyan');

export = koaBunyanLogger;

declare function koaBunyanLogger(logger?: Logger): Middleware;

// Extend the Koa context to add the logger..
declare module 'koa' {
    // tslint:disable-next-line: interface-name
    interface BaseContext {
        log: Logger;
    }
}
