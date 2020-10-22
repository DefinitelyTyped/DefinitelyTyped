// Type definitions for connect-trim-body 0.0
// Project: https://github.com/samora/connect-trim-body
// Definitions by: Levi Bostian <https://github.com/levibostian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

import { RequestHandler } from "express";

declare function connectTrimBodyMiddleware(): RequestHandler;

export = connectTrimBodyMiddleware;
