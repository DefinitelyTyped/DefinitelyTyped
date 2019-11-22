// Type definitions for express-healthcheck 0.1
// Project: https://github.com/lennym/express-healthcheck/
// Definitions by: Ollie Tribe <https://github.com/o8e>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { RequestHandlerParams } from 'express-serve-static-core';

export interface Options {
    test?: () => any;
    healthy?: () => any;
}

export default function fn(options?: Options): RequestHandlerParams;
