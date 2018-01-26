import * as _ from "../index";
declare module "../index" {
    type IsEqualCustomizer = (value: any, other: any, indexOrKey: PropertyName | undefined, parent: any, otherParent: any, stack: any) => boolean|undefined;

    interface LoDashStatic {
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
         *     return true;
         *   }
         * }
         *
         * var array = ['hello', 'goodbye'];
         * var other = ['hi', 'goodbye'];
         *
         * _.isEqualWith(array, other, customizer);
         * // => true
         */
        isEqualWith(
            value: any,
            other: any,
            customizer?: IsEqualCustomizer
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(
            other: any,
            customizer?: IsEqualCustomizer
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.isEqualWith
         */
        isEqualWith(
            other: any,
            customizer?: IsEqualCustomizer
        ): LoDashExplicitWrapper<boolean>;
    }
}