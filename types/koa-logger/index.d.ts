// Type definitions for koa-logger v2.0
// Project: https://github.com/koajs/logger
// Definitions by: Joshua DeVinney <https://github.com/geoffreak>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="koa"/>

import * as Koa from 'koa';

declare function KoaLogger(): Koa.Middleware;
declare namespace KoaLogger {}
export = KoaLogger;
