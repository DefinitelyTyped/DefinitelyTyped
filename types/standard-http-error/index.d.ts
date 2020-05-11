// Type definitions for standard-http-error 2.0
// Project: https://github.com/moll/js-standard-http-error
// Definitions by: Labat Robin <https://github.com/roblabat>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.2

import StandardError = require('standard-error');

export = HttpError;

declare class HttpError extends StandardError {
    code: number;

    constructor(code: number | string, message?: string, props?: object);
    constructor(code: number | string, props?: object);
}
