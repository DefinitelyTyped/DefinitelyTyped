// Type definitions for express-request-id 1.4
// Project: https://github.com/floatdrop/express-request-id
// Definitions by: jgeth <https://github.com/jgeth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { RequestHandler } from 'express-serve-static-core';

declare namespace expressRequestId {
    interface Options {
        uuidVersion?: string;
        setHeader?: boolean;
        headerName?: string;
        attributeName?: string;
    }
}

declare function expressRequestId(options?: expressRequestId.Options): RequestHandler;
export = expressRequestId;
