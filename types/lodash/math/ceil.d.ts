import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Calculates n rounded up to precision.
         *
         * @param n The number to round up.
         * @param precision The precision to round up to.
         * @return Returns the rounded up number.
         */
        ceil(
            n: number,
            precision?: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.ceil
         */
        ceil(precision?: number): LoDashExplicitWrapper<number>;
    }
}