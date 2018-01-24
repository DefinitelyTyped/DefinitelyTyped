declare namespace _ {
    interface LoDashStatic {
        /**
         * Subtract two numbers.
         *
         * @category Math
         * @param minuend The first number in a subtraction.
         * @param subtrahend The second number in a subtraction.
         * @returns Returns the difference.
         * @example
         *
         * _.subtract(6, 4);
         * // => 2
         */
        subtract(
            minuend: number,
            subtrahend: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.subtract
         */
        subtract(
            subtrahend: number
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.subtract
         */
        subtract(
            subtrahend: number
        ): LoDashExplicitWrapper<number>;
    }
}