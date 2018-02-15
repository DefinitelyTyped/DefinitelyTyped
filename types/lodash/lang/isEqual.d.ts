import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Performs a deep comparison between two values to determine if they are
         * equivalent.
         *
         * **Note:** This method supports comparing arrays, array buffers, booleans,
         * date objects, error objects, maps, numbers, `Object` objects, regexes,
         * sets, strings, symbols, and typed arrays. `Object` objects are compared
         * by their own, not inherited, enumerable properties. Functions and DOM
         * nodes are **not** supported.
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * var object = { 'user': 'fred' };
         * var other = { 'user': 'fred' };
         *
         * _.isEqual(object, other);
         * // => true
         *
         * object === other;
         * // => false
         */
        isEqual(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEqual
         */
        isEqual(
            other: any
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEqual
         */
        isEqual(
            other: any
        ): LoDashExplicitWrapper<boolean>;
    }
}