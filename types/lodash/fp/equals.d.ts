import _ = require("../index");

declare namespace Lodash {
    interface IsEqual {
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
        (): IsEqual;
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
        (other: any): IsEqual1x1;
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
        (other: any, value: any): boolean;
    }
    interface IsEqual1x1 {
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
        (): IsEqual1x1;
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
        (value: any): boolean;
    }
}

declare const equals: Lodash.IsEqual;
export = equals;
