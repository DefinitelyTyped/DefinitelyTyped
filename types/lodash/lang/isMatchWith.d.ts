import * as _ from "../index";
declare module "../index" {
    type isMatchWithCustomizer = (value: any, other: any, indexOrKey: PropertyName) => boolean;

    interface LoDashStatic {
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
         *     return true;
         *   }
         * }
         *
         * var object = { 'greeting': 'hello' };
         * var source = { 'greeting': 'hi' };
         *
         * _.isMatchWith(object, source, customizer);
         * // => true
         */
        isMatchWith(object: object, source: object, customizer: isMatchWithCustomizer): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isMatchWith
         */
        isMatchWith(source: object, customizer: isMatchWithCustomizer): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isMatchWith
         */
        isMatchWith(source: object, customizer: isMatchWithCustomizer): LoDashExplicitWrapper<boolean>;
    }
}