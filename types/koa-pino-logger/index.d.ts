// Type definitions for koa-pino-logger 2.1
// Project: https://github.com/pinojs/koa-pino-logger, https://github.com/davidmarkclements/koa-pino-logger
// Definitions by: Cameron Yan <https://github.com/khell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node"/>

import { Middleware } from 'koa';
import { DestinationStream, LoggerOptions, Logger, Level } from 'pino';
import { Options } from 'pino-http';
import * as stream from 'stream';
import * as http from 'http';

export = logger;

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
