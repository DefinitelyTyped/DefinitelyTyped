import _ = require("../index");

declare namespace Lodash {
    interface IsEqualWith {
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         * return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        (): IsEqualWith;
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         * return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        (other: any): IsEqualWith1x1;
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         * return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        (other: any, customizer: IsEqualCustomizer): IsEqualWith1x2;
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         * return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        (other: any, customizer: IsEqualCustomizer, value: any): boolean;
    }
    interface IsEqualWith1x1 {
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         * return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        (): IsEqualWith1x1;
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         * return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        (customizer: IsEqualCustomizer): IsEqualWith1x2;
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         * return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        (customizer: IsEqualCustomizer, value: any): boolean;
    }
    interface IsEqualWith1x2 {
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         * return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        (): IsEqualWith1x2;
        /**
         * This method is like `_.isEqual` except that it accepts `customizer` which is
         * invoked to compare values. If `customizer` returns `undefined` comparisons are
         * handled by the method instead. The `customizer` is invoked with up to seven arguments:
         * (objValue, othValue [, index|key, object, other, stack]).
         *
         * @category Lang
         * @param value The value to compare.
         * @param other The other value to compare.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if the values are equivalent, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, othValue) {
         *   if (isGreeting(objValue) && isGreeting(othValue)) {
         * return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        (value: any): boolean;
    }
}

declare const isEqualWith: Lodash.IsEqualWith;
export = isEqualWith;
