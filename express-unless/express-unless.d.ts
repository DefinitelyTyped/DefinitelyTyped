// Type definitions for express-unless
// Project: https://www.npmjs.org/package/express-unless
// Definitions by: Wonshik Kim <https://github.com/wokim/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "express-unless" {
    import express = require('express');

    function unless(options:unless.Options): express.RequestHandler;

    module unless {
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
}