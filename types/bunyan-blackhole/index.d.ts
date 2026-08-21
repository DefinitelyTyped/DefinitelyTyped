import Logger = require("bunyan");

/**
 * Constructor.
 * @param name name of the blackhole Logger
 * @return A bunyan logger .
 */
declare function bunyanBlackHole(name: string): Logger;
export = bunyanBlackHole;
