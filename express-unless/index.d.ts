// Type definitions for express-unless
// Project: https://www.npmjs.org/package/express-unless
// Definitions by: Wonshik Kim <https://github.com/wokim/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped




import express = require('express');

declare function unless(options: unless.Options): express.RequestHandler;

declare namespace unless {
    export interface Options {
        custom?: (req: express.Request) => boolean;
        path?: any; // TODO: union type 'string|string[]' is not supported yet
        ext?: any; // TODO: union type 'string|string[]' is not supported yet
        method?: any; // TODO: union type 'string|string[]' is not supported yet
    }
    export interface RequestHandler extends express.RequestHandler {
        unless?: typeof unless;
    }
}

export = unless;
