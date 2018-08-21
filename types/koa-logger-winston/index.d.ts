// Type definitions for koa-logger-winston 0.0
// Project: https://github.com/selbyk/koa-logger-winston#readme
// Definitions by: Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>

import { Middleware } from 'koa';
import { Logger } from 'winston';

export = logger;

declare function logger(logger: Logger): Middleware;

declare namespace logger {
}
