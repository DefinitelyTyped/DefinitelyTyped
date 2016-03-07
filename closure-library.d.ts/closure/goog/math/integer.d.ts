declare module goog {
    function require(name: 'goog.math.Integer'): typeof goog.math.Integer;
}

declare module goog.math {

    /**
     * Constructs a two's-complement integer an array containing bits of the
     * integer in 32-bit (signed) pieces, given in little-endian order (i.e.,
     * lowest-order bits in the first piece), and the sign of -1 or 0.
     *
     * See the from* functions below for other convenient ways of constructing
     * Integers.
     *
     * The internal representation of an integer is an array of 32-bit signed
     * pieces, along with a sign (0 or -1) that indicates the contents of all the
     * other 32-bit pieces out to infinity.  We use 32-bit pieces because these are
     * the size of integers on which Javascript performs bit-operations.  For
     * operations like addition and multiplication, we split each number into 16-bit
     * pieces, which can easily be multiplied within Javascript's floating-point
     * representation without overflow or change in sign.
     *
     * @struct
     * @constructor
     * @param {Array<number>} bits Array containing the bits of the number.
     * @param {number} sign The sign of the number: -1 for negative and 0 positive.
     * @final
     */
    class Integer {
        constructor(bits: Array<number>, sign: number);
        
        /** @type {!goog.math.Integer} */
        static ZERO: goog.math.Integer;
        
        /** @type {!goog.math.Integer} */
        static ONE: goog.math.Integer;
        
        /**
         * Returns an Integer representing the given (32-bit) integer value.
         * @param {number} value A 32-bit integer value.
         * @return {!goog.math.Integer} The corresponding Integer value.
         */
        static fromInt(value: number): goog.math.Integer;
        
        /**
         * Returns an Integer representing the given value, provided that it is a finite
         * number.  Otherwise, zero is returned.
         * @param {number} value The value in question.
         * @return {!goog.math.Integer} The corresponding Integer value.
         */
        static fromNumber(value: number): goog.math.Integer;
        
        /**
         * Returns a Integer representing the value that comes by concatenating the
         * given entries, each is assumed to be 32 signed bits, given in little-endian
         * order (lowest order bits in the lowest index), and sign-extending the highest
         * order 32-bit value.
         * @param {Array<number>} bits The bits of the number, in 32-bit signed pieces,
         *     in little-endian order.
         * @return {!goog.math.Integer} The corresponding Integer value.
         */
        static fromBits(bits: Array<number>): goog.math.Integer;
        
        /**
         * Returns an Integer representation of the given string, written using the
         * given radix.
         * @param {string} str The textual representation of the Integer.
         * @param {number=} opt_radix The radix in which the text is written.
         * @return {!goog.math.Integer} The corresponding Integer value.
         */
        static fromString(str: string, opt_radix?: number): goog.math.Integer;
        
        /**
         * Returns the value, assuming it is a 32-bit integer.
         * @return {number} The corresponding int value.
         */
        toInt(): number;
        
        /** @return {number} The closest floating-point representation to this value. */
        toNumber(): number;
        
        /**
         * @param {number=} opt_radix The radix in which the text should be written.
         * @return {string} The textual representation of this value.
         * @override
         */
        toString(opt_radix?: number): string;
        
        /**
         * Returns the index-th 32-bit (signed) piece of the Integer according to
         * little-endian order (i.e., index 0 contains the smallest bits).
         * @param {number} index The index in question.
         * @return {number} The requested 32-bits as a signed number.
         */
        getBits(index: number): number;
        
        /**
         * Returns the index-th 32-bit piece as an unsigned number.
         * @param {number} index The index in question.
         * @return {number} The requested 32-bits as an unsigned number.
         */
        getBitsUnsigned(index: number): number;
        
        /** @return {number} The sign bit of this number, -1 or 0. */
        getSign(): number;
        
        /** @return {boolean} Whether this value is zero. */
        isZero(): boolean;
        
        /** @return {boolean} Whether this value is negative. */
        isNegative(): boolean;
        
        /** @return {boolean} Whether this value is odd. */
        isOdd(): boolean;
        
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer equals the other.
         */
        equals(other: goog.math.Integer): boolean;
        
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer does not equal the other.
         */
        notEquals(other: goog.math.Integer): boolean;
        
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer is greater than the other.
         */
        greaterThan(other: goog.math.Integer): boolean;
        
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer is greater than or equal to the other.
         */
        greaterThanOrEqual(other: goog.math.Integer): boolean;
        
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer is less than the other.
         */
        lessThan(other: goog.math.Integer): boolean;
        
        /**
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {boolean} Whether this Integer is less than or equal to the other.
         */
        lessThanOrEqual(other: goog.math.Integer): boolean;
        
        /**
         * Compares this Integer with the given one.
         * @param {goog.math.Integer} other Integer to compare against.
         * @return {number} 0 if they are the same, 1 if the this is greater, and -1
         *     if the given one is greater.
         */
        compare(other: goog.math.Integer): number;
        
        /**
         * Returns an integer with only the first numBits bits of this value, sign
         * extended from the final bit.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Integer} The shorted integer value.
         */
        shorten(numBits: number): goog.math.Integer;
        
        /** @return {!goog.math.Integer} The negation of this value. */
        negate(): goog.math.Integer;
        
        /**
         * Returns the sum of this and the given Integer.
         * @param {goog.math.Integer} other The Integer to add to this.
         * @return {!goog.math.Integer} The Integer result.
         */
        add(other: goog.math.Integer): goog.math.Integer;
        
        /**
         * Returns the difference of this and the given Integer.
         * @param {goog.math.Integer} other The Integer to subtract from this.
         * @return {!goog.math.Integer} The Integer result.
         */
        subtract(other: goog.math.Integer): goog.math.Integer;
        
        /**
         * Returns the product of this and the given Integer.
         * @param {goog.math.Integer} other The Integer to multiply against this.
         * @return {!goog.math.Integer} The product of this and the other.
         */
        multiply(other: goog.math.Integer): goog.math.Integer;
        
        /**
         * Returns this Integer divided by the given one.
         * @param {goog.math.Integer} other Th Integer to divide this by.
         * @return {!goog.math.Integer} This value divided by the given one.
         */
        divide(other: goog.math.Integer): goog.math.Integer;
        
        /**
         * Returns this Integer modulo the given one.
         * @param {goog.math.Integer} other The Integer by which to mod.
         * @return {!goog.math.Integer} This value modulo the given one.
         */
        modulo(other: goog.math.Integer): goog.math.Integer;
        
        /** @return {!goog.math.Integer} The bitwise-NOT of this value. */
        not(): goog.math.Integer;
        
        /**
         * Returns the bitwise-AND of this Integer and the given one.
         * @param {goog.math.Integer} other The Integer to AND with this.
         * @return {!goog.math.Integer} The bitwise-AND of this and the other.
         */
        and(other: goog.math.Integer): goog.math.Integer;
        
        /**
         * Returns the bitwise-OR of this Integer and the given one.
         * @param {goog.math.Integer} other The Integer to OR with this.
         * @return {!goog.math.Integer} The bitwise-OR of this and the other.
         */
        or(other: goog.math.Integer): goog.math.Integer;
        
        /**
         * Returns the bitwise-XOR of this Integer and the given one.
         * @param {goog.math.Integer} other The Integer to XOR with this.
         * @return {!goog.math.Integer} The bitwise-XOR of this and the other.
         */
        xor(other: goog.math.Integer): goog.math.Integer;
        
        /**
         * Returns this value with bits shifted to the left by the given amount.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Integer} This shifted to the left by the given amount.
         */
        shiftLeft(numBits: number): goog.math.Integer;
        
        /**
         * Returns this value with bits shifted to the right by the given amount.
         * @param {number} numBits The number of bits by which to shift.
         * @return {!goog.math.Integer} This shifted to the right by the given amount.
         */
        shiftRight(numBits: number): goog.math.Integer;
    }
}
