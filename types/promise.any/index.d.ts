// Type definitions for promise.any 2.0
// Project: https://github.com/es-shims/Promise.any#readme
// Definitions by: AverageHelper <https://github.com/AverageHelper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.9

import implementation = require('./implementation');
import getPolyfill = require('./polyfill');
import shim = require('./shim');

type ExportedImplementationType = typeof implementation & {
    getPolyfill: typeof getPolyfill;
    implementation: typeof implementation;
    shim: typeof shim;
};

declare const exportedImplementation: ExportedImplementationType;

export = exportedImplementation;
