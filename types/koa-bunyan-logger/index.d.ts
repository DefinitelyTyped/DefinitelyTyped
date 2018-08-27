// Type definitions for koa-bunyan-logger 2.0
// Project: https://github.com/koajs/bunyan-logger
// Definitions by: Steven McDowall <https://github.com/sjmcdowall>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/// <reference types="node" />
import { Middleware } from 'koa';

import * as Logger from 'bunyan';

export default function KoaBunyanLogger(logger: Logger | undefined): Middleware;
