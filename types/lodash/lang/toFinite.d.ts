import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Converts `value` to a finite number.
         *
         * @since 4.12.0
         * @category Lang
         * @param value The value to convert.
         * @returns Returns the converted number.
         * @example
         *
         * _.toFinite(3.2);
         * // => 3.2
         *
         * _.toFinite(Number.MIN_VALUE);
         * // => 5e-324
         *
         * _.toFinite(Infinity);
         * // => 1.7976931348623157e+308
         *
         * _.toFinite('3.2');
         * // => 3.2
         */
        toFinite(value: any): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.toFinite
         */
        toFinite(): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.toFinite
         */
        toFinite(): LoDashExplicitWrapper<number>;
    }
}