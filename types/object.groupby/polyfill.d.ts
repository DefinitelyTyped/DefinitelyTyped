import implementation = require("./implementation");

/**
 * Gets the optimal implementation to use.
 */
declare function getPolyfill(): typeof implementation;
export = getPolyfill;
