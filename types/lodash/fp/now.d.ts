import _ = require("../index");

declare namespace Lodash {
    type Now = /**
     * Gets the number of milliseconds that have elapsed since the Unix epoch (1 January 1970 00:00:00 UTC).
     *
     * @return The number of milliseconds.
     */
    () => number;;
}

declare const now: Lodash.Now;
export = now;
