// Type definitions for has-bigints 1.0
// Project: https://github.com/ljharb/has-bigints#readme
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = hasBigInts;

/**
 * Determine if the JS environment has BigInt support. Not polyfillable, not forgeable.
 *
 * @example
 * import hasBigInts = require('has-bigints');
 *
 * hasBigInts() === true;
 */
declare function hasBigInts(): boolean;
