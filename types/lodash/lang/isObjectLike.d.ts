import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if `value` is object-like. A value is object-like if it's not `null`
         * and has a `typeof` result of "object".
         *
         * @category Lang
         * @param value The value to check.
         * @returns Returns `true` if `value` is object-like, else `false`.
         * @example
         *
         * _.isObjectLike({});
         * // => true
         *
         * _.isObjectLike([1, 2, 3]);
         * // => true
         *
         * _.isObjectLike(_.noop);
         * // => false
         *
         * _.isObjectLike(null);
         * // => false
         */
        isObjectLike(value?: any): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isObjectLike
         */
        isObjectLike(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isObjectLike
         */
        isObjectLike(): LoDashExplicitWrapper<boolean>;
    }
}