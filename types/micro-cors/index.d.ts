// Type definitions for micro-cors 0.1
// Project: https://github.com/possibilities/micro-cors#readme
// Definitions by: Callum Denby <https://github.com/CallumDenby>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RequestHandler } from "micro";

declare namespace micro_cors {
    export interface Options {
        maxAge?: string;
        origin?: string;
        allowHeaders?: string[];
        allowMethods?: string[];
        exposeHeaders?: string[];
    }
}

declare function micro_cors(options?: micro_cors.Options): (handler: RequestHandler) => RequestHandler;

export = micro_cors;
