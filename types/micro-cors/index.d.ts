// Type definitions for micro-cors 0.1
// Project: https://github.com/possibilities/micro-cors#readme
// Definitions by: Callum Denby <https://github.com/CallumDenby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { RequestHandler } from "micro";

interface Options {
    maxAge?: string;
    origin?: string;
    allowHeaders?: string[];
    allowMethods?: string[];
    exposeHeaders?: string[];
}

declare function micro_cors(options?: Options): (handler: RequestHandler) => RequestHandler;

export = micro_cors;
