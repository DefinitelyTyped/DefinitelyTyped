// Type definitions for bunyan-blackhole 0.2
// Project: https://github.com/Floby/node-bunyan-blackhole
// Definitions by: Olivier Chevet <https://github.com/olivr70>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1

import * as Logger from "bunyan";

/**
 * Constructor.
 * @param name name of the blackhole Logger
 * @return A bunyan logger .
 */
declare function bunyanBlackHole(name: string): Logger;
export = bunyanBlackHole;
