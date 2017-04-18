declare module goog {
    function require(name: 'goog.math.Long'): typeof goog.math.Long;
}

declare module goog.math {

    /**
     * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
     * values as *signed* integers.  See the from* functions below for more
     * convenient ways of constructing Longs.
     *
     * The internal representation of a long is the two given signed, 32-bit values.
     * We use 32-bit pieces because these are the size of integers on which
     * Javascript performs bit-operations.  For operations like addition and
     * multiplication, we split each number into 16-bit pieces, which can easily be
     * multiplied within Javascript's floating-point representation without overflow
     * or change in sign.
     *
     * In the algorithms below, we frequently reduce the negative case to the
     * positive case by negating the input(s) and then post-processing the result.
     * Note that we must ALWAYS check specially whether those values are MIN_VALUE
     * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
     * a positive number, it overflows back into a negative).  Not handling this
     * case would often result in infinite recursion.
     *
     * @param {number} low  The low (signed) 32 bits of the long.
     * @param {number} high  The high (signed) 32 bits of the long.
     * @struct
     * @constructor
     * @final
     */
    class Long {
        constructor(low: number, high: number);
        
        /** @type {!goog.math.Long} */
        static ZERO: goog.math.Long;
        
        /** @type {!goog.math.Long} */
        static ONE: goog.math.Long;
        
        /** @type {!goog.math.Long} */
        static NEG_ONE: goog.math.Long;
        
        /** @type {!goog.math.Long} */
        static MAX_VALUE: goog.math.Long;
        
        /** @type {!goog.math.Long} */
        static MIN_VALUE: goog.math.Long;
        
        /**
         * Returns a Long representing the given (32-bit) integer value.
         * @param {number} value The 32-bit integer in question.
         * @return {!goog.math.Long} The corresponding Long value.
         */
        static fromInt(value: number): goog.math.Long;
        
        /**
         * Returns a Long representing the given value, provided that it is a finite
         * number.  Otherwise, zero is returned.
         * @param {number} value The number in question.
         * @return {!goog.math.Long} The corresponding Long value.
         */
        static fromNumber(value: number): goog.math.Long;
        
        /**
         * Returns a Long representing the 64-bit integer that comes by concatenating
         * the given high and low bits.  Each is assumed to use 32 bits.
         * @param {number} lowBits The low 32-bits.
         * @param {number} highBits The high 32-bits.
         * @return {!goog.math.Long} The corresponding Long value.
         */
        static fromBits(lowBits: number, highBits: number): goog.math.Long;
        
        /**
         * Returns a Long representation of the given string, written using the given
         * radix.
         * @param {string} str The textual representation of the Long.
         * @param {number=} opt_radix The radix in which the text is written.
         * @return {!goog.math.Long} The corresponding Long value.
         */
        static fromString(str: string, opt_radix?: number): goog.math.Long;
        
        /** @return {number} The value, assuming it is a 32-bit integer. */
        toInt(): number;
        
        /** @return {number} The closest floating-point representation to this value. */
        toNumber(): number;
        
        /**
         * @param {number=} opt_radix The radix in which the text should be written.
         * @return {string} The textual representation of this value.
         * @override
         */
        toString(opt_radix?: number): string;
        
        /** @return {number} The high 32-bits as a signed value. */
        getHighBits(): number;
        
        /** @return {number} The low 32-bits as a signed value. */
        getLowBits(): number;
        
        /** @return {number} The low 32-bits as an unsigned value. */
        getLowBitsUnsigned(): number;
        
        /**
         * @return {number} Returns the number of bits needed to represent the absolute
         *     value of this Long.
         */
        getNumBitsAbs(): number;
        
        /** @return {boolean} Whether this value is zero. */
        isZero(): boolean;
        
        /** @return {boolean} Whether this value is negative. */
        isNegative(): boolean;
        
        /** @return {boolean} Whether this value is odd. */
        isOdd(): boolean;
        
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long equals the other.
         */
        equals(other: goog.math.Long): boolean;
        
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long does not equal the other.
         */
        notEquals(other: goog.math.Long): boolean;
        
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long is less than the other.
         */
        lessThan(other: goog.math.Long): boolean;
        
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long is less than or equal to the other.
         */
        lessThanOrEqual(other: goog.math.Long): boolean;
        
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long is greater than the other.
         */
        greaterThan(other: goog.math.Long): boolean;
        
        /**
         * @param {goog.math.Long} other Long to compare against.
         * @return {boolean} Whether this Long is greater than or equal to the other.
         */
        greaterThanOrEqual(other: goog.math.Long): boolean;
        
        /**
         * Compares this Long with the given one.
         * @param {goog.math.Long} other Long to compare against.
         * @return {number} 0 if they are the same, 1 if the this is greater, and -1
         *     if the given one is greater.
         */
        compare(other: goog.math.Long): number;
        
        /** @return {!goog.math.Long} The negation of this value. */
        negate(): goog.math.Long;
        
        /**
         * Returns the sum of this and the given Long.
         * @param {goog.math.Long} other Long to add to this one.
         * @return {!goog.math.Long} The sum of this and the given Long.
         */
        add(other: goog.math.Long): goog.math.Long;
        
        /**
         * Returns the difference of this and the given Long.
         * @param {goog.math.Long} other Long to subtract from this.
         * @return {!goog.math.Long} The difference of this and the given Long.
         */
        subtract(other: goog.math.Long): goog.math.Long;
        
        /**
         * Returns the product of this and the given long.
         * @param {goog.math.Long} other Long to multiply with this.
         * @return {!goog.math.Long} The product of this and the other.
         */
        multiply(other: goog.math.Long): goog.math.Long;
        
        /**
         * Returns this Long divided by the given one.
         * @param {goog.math.Long} other Long by which to divide.
         * @return {!goog.math.Long} This Long divided by the given one.
         */
        div(other: goog.math.Long): goog.math.Long;
        
        /**
         * Returns this Long modulo the given one.
         * @param {goog.math.Long} other Long by which to mod.
         * @return {!goog.math.Long} This Long modulo the given one.
         */
        modulo(other: goog.math.Long): goog.math.Long;
        
        /** @return {!goog.math.Long} The bitwise-NOT of this value. */
        not(): goog.math.Long;
        
        /**
         * Returns the bitwise-AND of this Long and the given one.
         * @param {goog.math.Long} other The Long with which to AND.
         * @return {!goog.math.Long} The bitwise-AND of this and the other.
         */
        and(other: goog.math.Long): goog.math.Long;
        
        /**
         * Returns the bitwise-OR of this Long and the given one.
         * @param {goog.math.Long} other The Long with which to OR.
         * @return {!goog.math.Long} The bitwise-OR of this and the other.
         */
        or(other: goog.math.Long): goog.math.Long;
        
        /**
         * Returns the bitwise-XOR of this Long and the given one.
         * @param {goog.math.Long} other The Long with which to XOR.
         * @return {!goog.math.Long} The bitwise-XOR of this and the other.
         */
        xor(other: goog.math.Long): goog.math.Long;
        
        /**
         * Returns this Long with bits shifted to the left by the given amount.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Long} This shifted to the left by the given amount.
         */
        shiftLeft(numBits: number): goog.math.Long;
        
        /**
         * Returns this Long with bits shifted to the right by the given amount.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Long} This shifted to the right by the given amount.
         */
        shiftRight(numBits: number): goog.math.Long;
        
        /**
         * Returns this Long with bits shifted to the right by the given amount, with
         * zeros placed into the new leading bits.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Long} This shifted to the right by the given amount, with
         *     zeros placed into the new leading bits.
         */
        shiftRightUnsigned(numBits: number): goog.math.Long;
    }
}
