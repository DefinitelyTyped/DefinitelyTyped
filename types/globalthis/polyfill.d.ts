import implementation = require('./implementation');

/**
 * Gets the `globalThis` object.
 */
declare function getPolyfill(): typeof implementation;
export = getPolyfill;
