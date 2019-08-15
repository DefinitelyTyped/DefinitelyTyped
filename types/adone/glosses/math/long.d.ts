declare namespace adone.math {
    namespace I {
        interface LowHighBits {
            /**
             * The low (signed) 32 bits of the long
             */
            low: number;
            /**
             * The high (signed) 32 bits of the long
             */
            high: number;
        }
        type Longable = Long | number | string | LowHighBits;
    }

    /**
     * Represents a 64 bit two's-complement integer
     */
    class Long {
        low: number;
        high: number;
        unsigned: boolean;

        /**
         * @param low The low (signed) 32 bits of the long
         * @param high The high (signed) 32 bits of the long
         * @param unsigned Whether unsigned or not, defaults to false for signed
         */
        constructor(low?: number, high?: number, unsigned?: boolean);

        /**
         * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer
         */
        toInt(): number;

        /**
         * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa)
         */
        toNumber(): number;

        /**
         * Converts the Long to a string written in the specified radix
         *
         * @param radix Radix (2-36), 10 by default
         */
        toString(radix?: number): string;

        inspect(): string;

        /**
         * Gets the high 32 bits as a signed integer
         */
        getHighBits(): number;

        /**
         * Gets the high 32 bits as an unsigned integer
         */
        getHighBitsUnsigned(): number;

        /**
         * Gets the low 32 bits as a signed integer
         */
        getLowBits(): number;

        /**
         * Gets the low 32 bits as an unsigned integer
         */
        getLowBitsUnsigned(): number;

        /**
         * Gets the number of bits needed to represent the absolute value of this Long
         */
        getNumBitsAbs(): number;

        /**
         * Tests if this Long's value equals zero
         */
        isZero(): boolean;

        /**
         * Tests if this Long's value is negative
         */
        isNegative(): boolean;

        /**
         * Tests if this Long's value is positive
         */
        isPositive(): boolean;

        /**
         * Tests if this Long's value is odd
         */
        isOdd(): boolean;

        /**
         * Tests if this Long's value is even
         */
        isEven(): boolean;

        /**
         * Tests if this Long's value equals the specified's
         */
        equals(other: I.Longable): boolean;

        /**
         * Tests if this Long's value is less than the specified's
         */
        lessThan(other: I.Longable): boolean;

        /**
         * Tests if this Long's value is less than or equal the specified's
         */
        lessThanOrEqual(other: I.Longable): boolean;

        /**
         * Tests if this Long's value is greater than the specified's
         */
        greaterThan(other: I.Longable): boolean;

        /**
         * Tests if this Long's value is greater than or equal the specified's
         */
        greaterThanOrEqual(other: I.Longable): boolean;

        /**
         * Compares this Long's value with the specified's.
         * Returns 0 if they are the same, 1 if the this is greater and -1 if the given one is greater
         */
        compare(other: I.Longable): number;

        /**
         * Negates this Long's value
         */
        negate(): Long;

        /**
         * Returns the sum of this and the specified Long
         */
        add(addend: I.Longable): Long;

        /**
         * Returns the difference of this and the specified Long
         */
        sub(subtrahend: I.Longable): Long;

        /**
         * Returns the product of this and the specified Long
         */
        mul(multiplier: I.Longable): Long;

        /**
         * Returns this Long divided by the specified
         */
        div(divisor: I.Longable): Long;

        /**
         * Returns this Long modulo the specified
         */
        mod(divisor: I.Longable): Long;

        /**
         * Returns the bitwise NOT of this Long
         */
        not(): Long;

        /**
         * Returns the bitwise AND of this Long and the specified
         */
        and(other: I.Longable): Long;

        /**
         * Returns the bitwise OR of this Long and the specifieds
         */
        or(other: I.Longable): Long;

        /**
         * Returns the bitwise XOR of this Long and the given one
         */
        xor(other: I.Longable): Long;

        /**
         * Returns this Long with bits shifted to the left by the given amount
         */
        shl(numBits: number | Long): Long;

        /**
         * Returns this Long with bits arithmetically shifted to the right by the given amount
         */
        shr(numBits: number | Long): Long;

        /**
         * Returns this Long with bits logically shifted to the right by the given amount
         */
        shru(numBits: number | Long): Long;

        /**
         * Converts this Long to signed
         */
        toSigned(): Long;

        /**
         * Converts this Long to unsigned
         */
        toUnsigned(): Long;

        /**
         * Converts this Long to an array of bytes, big-endian by default
         *
         * @param le Whether to return an array in little-endian format
         */
        toBytes(le?: boolean): number[];

        /**
         * Converts this Long to an array of bytes in little-endian format
         */
        toBytesLE(): number[];

        /**
         * Converts this Long to an array of bytes in big-endian format
         */
        toBytesBE(): number[];

        /**
         * Returns a Long representing the given 32 bit integer value
         */
        static fromInt(value: number, unsigned?: boolean): Long;

        /**
         * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned
         */
        static fromNumber(value?: number, unsigned?: boolean): Long;

        /**
         * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is assumed to use 32 bits
         */
        static fromBits(lowBits: number, highBits: number, unsigned?: boolean): Long;

        /**
         * Returns a Long representation of the given string, written using the specified radix
         */
        static fromString(str: string, unsigned?: boolean, radix?: number): Long;

        /**
         * Returns a Long representation of the given string, written using the specified radix
         */
        static fromString(str: string, radix?: number): Long;

        /**
         * Converts the specified value to a Long
         */
        static fromValue(val: I.Longable): Long;

        /**
         * Minimum signed value
         */
        static MIN_VALUE: Long;

        /**
         * Maximum signed value
         */
        static MAX_VALUE: Long;

        /**
         * Maximum unsigned value
         */
        static MAX_UNSIGNED_VALUE: Long;

        /**
         * Signed zero
         */
        static ZERO: Long;

        /**
         * Unsigned zero
         */
        static UZERO: Long;

        /**
         * Signed one
         */
        static ONE: Long;

        /**
         * Unsigned one
         */
        static UONE: Long;

        /**
         * Signed negative one
         */
        static NEG_ONE: Long;
    }
}
