// Type definitions for es-aggregate-error 1.0
// Project: https://github.com/es-shims/AggregateError#readme
// Definitions by: AverageHelper <https://github.com/AverageHelper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import implementation = require('./implementation');
import getPolyfill = require('./polyfill');
import shim = require('./shim');

declare class AggregateError extends implementation {
    static getPolyfill: typeof getPolyfill;
    static implementation: typeof implementation;
    static shim: typeof shim;
}

export = AggregateError;
