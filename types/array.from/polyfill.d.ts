import ArrayFrom = require('./implementation');

/**
 * Gets the optimal `Array.from` implementation to use.
 */
declare function getPolyfill(): typeof ArrayFrom;
export = getPolyfill;
