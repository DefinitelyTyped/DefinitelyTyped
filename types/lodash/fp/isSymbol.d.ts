import _ = require("../index");

declare namespace Lodash {
    interface IsSymbol {
        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        (): IsSymbol;
        /**
         * Checks if `value` is classified as a `Symbol` primitive or object.
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is correctly classified, else `false`.
         * @example
         *
         * _.isSymbol(Symbol.iterator);
         * // => true
         *
         * _.isSymbol('abc');
         * // => false
         */
        (value: any): boolean;
    }
}

declare const isSymbol: Lodash.IsSymbol;
export = isSymbol;
