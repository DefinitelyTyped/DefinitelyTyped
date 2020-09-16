// Type definitions for express-bunyan-logger 1.3
// Project: https://github.com/villadora/express-bunyan-logger
// Definitions by: Shrey Jain <https://github.com/shreyjain1994>
//                 Matt R. Wilson <https://github.com/mastermatt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import Bunyan = require('bunyan');
import express = require('express');

export = Factory;

declare function Factory(options?: Factory.Options): express.RequestHandler;

declare namespace Factory {
    type FormatFunction = (meta: any) => string;
    type IncludesFunction = (req: express.Request, res: express.Response) => any;
    type RequestIdGenFunction = (req: express.Request) => string;
    type LevelFunction = (status: number, err: Error | null, meta: any) => string;

    interface Options extends Partial<Bunyan.LoggerOptions> {
        logger?: Bunyan;
        format?: string | FormatFunction;
        parseUA?: boolean;
        levelFn?: LevelFunction;
        includesFn?: IncludesFunction;
        excludes?: string[];
        obfuscate?: string[];
        obfuscatePlaceholder?: string;
        immediate?: boolean;
        genReqId?: RequestIdGenFunction;
    }

    function errorLogger(options?: Options): express.ErrorRequestHandler;
}
