declare namespace _ {
    interface LoDashStatic {
        /**
         * Calculates n rounded down to precision.
         *
         * @param n The number to round down.
         * @param precision The precision to round down to.
         * @return Returns the rounded down number.
         */
        floor(
            n: number,
            precision?: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.floor
         */
        floor(precision?: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.floor
         */
        floor(precision?: number): LoDashExplicitWrapper<number>;
    }
}