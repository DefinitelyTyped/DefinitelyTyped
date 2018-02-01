import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Calculates n rounded to precision.
         *
         * @param n The number to round.
         * @param precision The precision to round to.
         * @return Returns the rounded number.
         */
        round(
            n: number,
            precision?: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.round
         */
        round(precision?: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.round
         */
        round(precision?: number): LoDashExplicitWrapper<number>;
    }
}