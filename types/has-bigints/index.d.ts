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
