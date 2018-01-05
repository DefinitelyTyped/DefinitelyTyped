// Type definitions for hpp 0.2
// Project: https://github.com/analog-nico/hpp
// Definitions by: Michael Strobel <https://github.com/kryops>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as express from 'express';

declare namespace hpp {
    interface Options {
        checkBody?: boolean;
        checkBodyOnlyForContentType?: string;
        checkQuery?: boolean;
        whitelist?: string | string[];
    }
}

declare function hpp(options?: hpp.Options): express.RequestHandler;

export = hpp;
