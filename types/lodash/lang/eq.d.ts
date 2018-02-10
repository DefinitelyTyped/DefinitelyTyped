import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
         * comparison between two values to determine if they are equivalent.
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
         * _.eq(object, object);
         * // => true
         *
         * _.eq(object, other);
         * // => false
         *
         * _.eq('a', 'a');
         * // => true
         *
         * _.eq('a', Object('a'));
         * // => false
         *
         * _.eq(NaN, NaN);
         * // => true
         */
        eq(
            value: any,
            other: any
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.eq
         */
        eq(
            other: any
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.eq
         */
        eq(
            other: any
        ): LoDashExplicitWrapper<boolean>;
    }
}