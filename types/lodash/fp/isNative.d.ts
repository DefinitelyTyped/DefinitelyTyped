// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Checks if value is a native function.
     * @param value The value to check.
     *
     * @retrun Returns true if value is a native function, else false.
     */
    type IsNative = (value: any) => value is (...args: any[]) => any;
}

declare const isNative: Lodash.IsNative;
export = isNative;
