import _ = require("../index");

declare namespace Lodash {
    interface IsNil {
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
        (): IsNil;
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
        (value: any): value is null | undefined;
    }
}

declare const isNil: Lodash.IsNil;
export = isNil;
