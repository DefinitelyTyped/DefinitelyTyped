// Type definitions for array.from 1.0
// Project: https://mths.be/array-from
// Definitions by: ExE Boss <https://github.com/ExE-Boss>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import implementation = require('./implementation');
import getPolyfill = require('./polyfill');
import shim = require('./shim');

/**
 * Creates an array from an array-like or iterable object.
 * @param iterable An iterable object to convert to an array.
 * @param mapfn A mapping function to call on every element of the array.
 * @param thisArg Value of `this` used to invoke the mapfn.
 */
declare const ArrayFrom: typeof implementation & {
	/**
	 * Gets the optimal `Array.from` implementation to use.
	 */
	readonly getPolyfill: typeof getPolyfill;

	/**
	 * Creates an array from an array-like or iterable object.
	 * @param iterable An iterable object to convert to an array.
	 * @param mapfn A mapping function to call on every element of the array.
	 * @param thisArg Value of `this` used to invoke the mapfn.
	 */
	readonly implementation: typeof implementation;
	readonly shim: typeof shim;
};
export = ArrayFrom;
