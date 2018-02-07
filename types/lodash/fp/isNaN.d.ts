// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Checks if value is NaN.
     *
     * Note: This method is not the same as isNaN which returns true for undefined and other non-numeric values.
     *
     * @param value The value to check.
     * @return Returns true if value is NaN, else false.
     */
    type IsNaN = (value: any) => boolean;
}

declare const isNaN: Lodash.IsNaN;
export = isNaN;
