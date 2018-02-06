// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface IsMatchWith {
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         * return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        (): IsMatchWith;
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         * return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        (customizer: _.isMatchWithCustomizer): IsMatchWith1x1;
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         * return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        (customizer: _.isMatchWithCustomizer, source: object): IsMatchWith1x2;
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         * return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        (customizer: _.isMatchWithCustomizer, source: object, object: object): boolean;
    }
    interface IsMatchWith1x1 {
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         * return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        (): IsMatchWith1x1;
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         * return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        (source: object): IsMatchWith1x2;
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         * return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        (source: object, object: object): boolean;
    }
    interface IsMatchWith1x2 {
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         * return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        (): IsMatchWith1x2;
        /**
         * This method is like `_.isMatch` except that it accepts `customizer` which
         * is invoked to compare values. If `customizer` returns `undefined` comparisons
         * are handled by the method instead. The `customizer` is invoked with three
         * arguments: (objValue, srcValue, index|key, object, source).
         *
         * @category Lang
         * @param object The object to inspect.
         * @param source The object of property values to match.
         * @param [customizer] The function to customize comparisons.
         * @returns Returns `true` if `object` is a match, else `false`.
         * @example
         *
         * function isGreeting(value) {
         *   return /^h(?:i|ello)$/.test(value);
         * }
         *
         * function customizer(objValue, srcValue) {
         *   if (isGreeting(objValue) && isGreeting(srcValue)) {
         * return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        (object: object): boolean;
    }
}

declare const isMatchWith: Lodash.IsMatchWith;
export = isMatchWith;
