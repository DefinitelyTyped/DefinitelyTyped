// Type definitions for array.from 1.0
// Project: https://mths.be/array-from
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import implementation = require('./implementation');
import getPolyfill = require('./polyfill');
import shim = require('./shim');

declare const ArrayFrom: typeof implementation & {
	readonly getPolyfill: typeof getPolyfill;
	readonly implementation: typeof implementation;
	readonly shim: typeof shim;
};
export = ArrayFrom;
