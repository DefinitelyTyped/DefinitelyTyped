// Type definitions for express-unless 0.5
// Project: https://www.npmjs.org/package/express-unless
// Definitions by: Wonshik Kim <https://github.com/wokim>
//                 Joao Vieira <https://github.com/joaovieira>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import express = require("express");

declare function unless(options: unless.Options): express.RequestHandler;
declare function unless(options: unless.Options["custom"]): express.RequestHandler;

declare namespace unless {
    export interface Options {
        custom?: (req: express.Request) => boolean;
        path?: string | string[];
        ext?: string | string[];
        method?: string | string[];
    }
    export interface RequestHandler extends express.RequestHandler {
        unless?: typeof unless;
    }
}

export = unless;
