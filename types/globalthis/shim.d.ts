import implementation = require('./implementation');

/**
 * Installs the `globalThis` property onto the global object.
 */
declare function shimGlobalThis(): typeof implementation;
export = shimGlobalThis;
