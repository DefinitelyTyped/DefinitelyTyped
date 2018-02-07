// Type definitions for koa-logger-winston 0.0
// Project: https://github.com/selbyk/koa-logger-winston#readme
// Definitions by: Steve Hipwell <https://github.com/stevehipwell>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node"/>

import { Middleware } from 'koa';
import { LoggerInstance } from 'winston';

export = logger;

declare function logger(logger: LoggerInstance): Middleware;

declare namespace logger {
}
