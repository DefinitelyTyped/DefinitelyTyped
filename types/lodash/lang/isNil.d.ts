import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
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
        isNil(value: any): value is null | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * see _.isNil
         */
        isNil(): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * see _.isNil
         */
        isNil(): LoDashExplicitWrapper<boolean>;
    }
}