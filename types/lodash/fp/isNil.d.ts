// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    /**
     * Checks if `value` is `null` or `undefined`.
     *
     * @category Lang
     * @param value The value to check.
     * @returns Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
    type IsNil = (value: any) => value is null | undefined;
}

declare const isNil: Lodash.IsNil;
export = isNil;
