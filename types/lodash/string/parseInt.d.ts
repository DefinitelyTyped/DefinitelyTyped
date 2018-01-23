declare namespace _ {
    interface LoDashStatic {
        /**
         * Converts string to an integer of the specified radix. If radix is undefined or 0, a radix of 10 is used
         * unless value is a hexadecimal, in which case a radix of 16 is used.
         *
         * Note: This method aligns with the ES5 implementation of parseInt.
         *
         * @param string The string to convert.
         * @param radix The radix to interpret value by.
         * @return Returns the converted integer.
         */
        parseInt(
            string: string,
            radix?: number
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.parseInt
         */
        parseInt(radix?: number): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.parseInt
         */
        parseInt(radix?: number): LoDashExplicitWrapper<number>;
    }
}