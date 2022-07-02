// Type definitions for koa-pino-logger 3.0
// Project: https://github.com/pinojs/koa-pino-logger, https://github.com/davidmarkclements/koa-pino-logger
// Definitions by: Cameron Yan <https://github.com/khell>
//                 Jeremy Hull <https://github.com/sourrust>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { Middleware as BaseMiddleware } from 'koa';
import { DestinationStream, Logger } from 'pino';
import { Options } from 'pino-http';

export = logger;

interface Middleware extends BaseMiddleware {
    logger: Logger;
}

declare function logger(
    opts?: Options,
    stream?: DestinationStream
): Middleware;
declare function logger(stream?: DestinationStream): Middleware;

declare module 'koa' {
    interface ExtendableContext {
        log: Logger;
    }
}
