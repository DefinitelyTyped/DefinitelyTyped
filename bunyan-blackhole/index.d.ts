// Type definitions for bunyan-blackhole 0.2
// Project: https://github.com/Floby/node-bunyan-blackhole
// Definitions by: Olivier Chevet <https://github.com/olivr70>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as Logger from "bunyan";

/**
 * Constructor.
 * @param {string} [name] name of the blackhole Logger
 * @return {Logger} A bunyan logger .
 */
declare function bunyanBlackHole(name: string): Logger;
export = bunyanBlackHole;
