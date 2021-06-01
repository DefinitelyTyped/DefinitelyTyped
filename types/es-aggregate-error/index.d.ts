// Type definitions for es-aggregate-error 1.0
// Project: https://github.com/es-shims/AggregateError#readme
// Definitions by: AverageHelper <https://github.com/AverageHelper>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

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

// This seems to be the only way to export these types here without colliding with the "export =" syntax.
declare namespace exportedImplementation {
    type AggregateError = implementation;
}
