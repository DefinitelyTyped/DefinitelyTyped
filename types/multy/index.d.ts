// Type definitions for multy 0.1
// Project: https://github.com/eduardorfs/multy
// Definitions by: Jan Dolezel <https://github.com/dolezel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import * as Koa from "koa";
import * as busboy from "busboy";

declare module "koa" {
    interface Request {
        body: any;
    }
}

declare function multy(opts?: busboy.BusboyConfig): Koa.Middleware;

declare namespace multy {}

export = multy;
