/// <reference path="./matrix.d.ts" />
/// <reference path="./simd.d.ts" />

declare namespace adone {
    /**
     * math related things
     */
    namespace math {
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

        namespace I.BigNumber {
            interface BufferConvertOptions {
                endian?: 1 | -1 | "big" | "little";
                size?: "auto" | number;
            }
        }

        /**
         * Represents a number of arbitrary precision
         */
        class BigNumber {
            /**
             * Creates a BigNumber from the given value, the base is 10
             */
            constructor(n: number | string | BigNumber);

            /**
             * Creates a BigNumber from the given string and base
             */
            constructor(n: string, base: number);

            /**
             * Converts the number to a string in the given base
             */
            toString(base?: number): string;

            /**
             * Converts the bignum into a Number.
             * If the bignum is too big you'll lose precision or you'll get ±Infinity.
             */
            toNumber(): number;

            /**
             * Returns a new Buffer with the data from the bignum.
             */
            toBuffer(opts?: I.BigNumber.BufferConvertOptions): Buffer;

            /**
             * Returns a new bignum containing the instance value plus n
             */
            add(n: number | string | BigNumber): BigNumber;

            /**
             * Return a new bignum containing the instance value minus n
             */
            sub(n: number | string | BigNumber): BigNumber;

            /**
             * Returns a new bignum containing the instance value multiplied by n
             */
            mul(n: number | string | BigNumber): BigNumber;

            /**
             * Returns a new bignum containing the instance value integrally divided by n
             */
            div(n: number | string | BigNumber): BigNumber;

            /**
             * Returns a new bignum with the absolute value of the instance
             */
            abs(): BigNumber;

            /**
             * Returns a new bignum with the negative of the instance value
             */
            neg(): BigNumber;

            /**
             * Compares the instance value to n.
             *
             * Returns a positive integer if > n, a negative integer if < n, and 0 if == n
             */
            cmp(n: number | string | BigNumber): number;

            /**
             * Checks whether the instance value is greater than n (> n).
             */
            gt(n: number | string | BigNumber): boolean;

            /**
             * Checks whether the instance value is greater than or equal to n (>= n).
             */
            ge(n: number | string | BigNumber): boolean;

            /**
             * Checks whether the instance value is equal to n (== n).
             */
            eq(n: number | string | BigNumber): boolean;

            /**
             * Checks whether the instance value is less than n (< n).
             */
            lt(n: number | string | BigNumber): boolean;

            /**
             * Checks whether the instance value is less than or equal to n (<= n).
             */
            le(n: number | string | BigNumber): boolean;

            /**
             * Returns a new bignum with the instance value bitwise AND (&)-ed with n.
             */
            and(n: number | string | BigNumber): BigNumber;

            /**
             * Returns a new bignum with the instance value bitwise inclusive-OR (|)-ed with n.
             */
            or(n: number | string | BigNumber): BigNumber;

            /**
             * Returns a new bignum with the instance value bitwise exclusive-OR (^)-ed with n.
             */
            xor(n: number | string | BigNumber): BigNumber;

            /**
             * Returns a new bignum with the instance value modulo n.
             */
            mod(n: number | string | BigNumber): BigNumber;

            /**
             * Returns a new bignum with the instance value raised to the nth power.
             */
            pow(n: number | string | BigNumber): BigNumber;

            /**
             * Returns a new bignum with the instance value raised to the nth power modulo m.
             */
            powm(n: number | string | BigNumber, m: number | string | BigNumber): BigNumber;

            /**
             * Computes the multiplicative inverse modulo m.
             */
            invertm(m: number | string | BigNumber): BigNumber;

            /**
             * Returns a random number from 0 to this -1
             */
            rand(): BigNumber;

            /**
             * Returns a random number from this to upperBound - 1
             */
            rand(upperBound: number | string | BigNumber): BigNumber;

            /**
             * Checks whether the bignum is:
             *
             * - certainly prime (true)
             *
             * - probably prime ('maybe')
             *
             * - certainly composite (false)
             */
            probPrime(): boolean | "maybe";

            /**
             * Returns the next prime number after this bignum
             */
            nextPrime(): BigNumber;

            /**
             * Returns a new bignum that is the square root. This truncates.
             */
            sqrt(): BigNumber;

            /**
             * Returns a new bignum that is the nth root. This truncates.
             */
            root(n: number | string | BigNumber): BigNumber;

            /**
             * Returns a new bignum that is the 2^n multiple. Equivalent of the << operator.
             */
            shiftLeft(n: number | string | BigNumber): BigNumber;

            /**
             * Returns a new bignum of the value integer divided by 2^n. Equivalent of the >> operator.
             */
            shiftRight(n: number | string | BigNumber): BigNumber;

            /**
             * Returns the greatest common divisor of the current bignum with n as a new bignum.
             */
            gcd(n: number | string | BigNumber): BigNumber;

            /**
             * Returns the Jacobi symbol (or Legendre symbol if n is prime) of the current bignum (= a) over n.
             * Note that n must be odd and >= 3. 0 <= a < n.
             * Returns -1 or 1
             */
            jacobi(n: number | string | BigNumber): number;

            /**
             * Returns the number of bits used to represent the current bignum
             */
            bitLength(): number;

            /**
             * Checks whether the bit at the given index is set
             */
            isBitSet(n: number): boolean;

            /**
             * Generates a probable prime number of length bits.
             *
             * @param bits the number of bits
             * @param safe If true, it will be a "safe" prime of the form p=2p'+1 where p' is also prime. Default: true
             */
            static prime(bits: number, safe?: boolean): BigNumber;

            /**
             * Creates a new bignum from a Buffer.
             */
            static fromBuffer(buf: Buffer, opts?: I.BigNumber.BufferConvertOptions): BigNumber;

            /**
             * One
             */
            static ONE: BigNumber;

            /**
             * Zero
             */
            static ZERO: BigNumber;
        }

        /**
         * Represents a set of bits
         */
        class BitSet {
            /**
             * Creates a new bitset of n bits
             */
            constructor(n: number);

            /**
             * Creates a new bitset from a dehydrated bitset
             */
            constructor(key: string);

            /**
             * Checks whether a bit at a specific index is set
             */
            get(idx: number): boolean;

            /**
             * Sets a single bit.
             * Returns true if set was successfull
             */
            set(idx: number): boolean;

            /**
             * Sets a range of bits.
             * Returns true if set was successfull
             */
            setRange(from: number, to: number): boolean;

            /**
             * Unsets a single bit.
             * Returns true if unset was successfull
             */
            unset(idx: number): boolean;

            /**
             * Unsets a range of bits.
             * Returns true if unset was successfull
             */
            unsetRange(from: number, to: number): boolean;

            /**
             * Toggles a single bit
             */
            toggle(idx: number): boolean;

            /**
             * Toggles a range of bits
             */
            toggleRange(from: number, to: number): boolean;

            /**
             * Clears the entire bitset
             */
            clear(): boolean;

            /**
             * Clones the set
             */
            clone(): BitSet;

            /**
             * Turns the bitset into a comma separated string that skips leading & trailing 0 words.
             * Ends with the number of leading 0s and MAX_BIT.
             * Useful if you need the bitset to be an object key (eg dynamic programming).
             * Can rehydrate by passing the result into the constructor
             */
            dehydrate(): string;

            /**
             * Performs a bitwise AND on 2 bitsets or 1 bitset and 1 index.
             * Both bitsets must have the same number of words, no length check is performed to prevent and overflow.
             */
            and(value: number | BitSet): BitSet;

            /**
             * Performs a bitwise OR on 2 bitsets or 1 bitset and 1 index.
             * Both bitsets must have the same number of words, no length check is performed to prevent and overflow.
             */
            or(value: number | BitSet): BitSet;

            /**
             * Performs a bitwise XOR on 2 bitsets or 1 bitset and 1 index.
             * Both bitsets must have the same number of words, no length check is performed to prevent and overflow.
             */
            xor(value: number | BitSet): BitSet;

            /**
             * Runs a custom function on every set bit.
             * Faster than iterating over the entire bitset with a get().
             * If the callback returns `false` it stops iterating.
             */
            forEach(callback: ((idx: number) => void | boolean)): void;

            /**
             * Performs a circular shift bitset by an offset
             *
             * @param n number of positions that the bitset that will be shifted to the right. Using a negative number will result in a left shift.
             */
            circularShift(n: number): BitSet;

            /**
             * Gets the cardinality (count of set bits) for the entire bitset
             */
            getCardinality(): number;

            /**
             * Gets the indices of all set bits
             */
            getIndices(): number[];

            /**
             * Checks if one bitset is subset of another.
             */
            isSubsetOf(other: BitSet): boolean;

            /**
             * Quickly determines if a bitset is empty
             */
            isEmpty(): boolean;

            /**
             * Quickly determines if both bitsets are equal (faster than checking if the XOR of the two is === 0).
             * Both bitsets must have the same number of words, no length check is performed to prevent and overflow.
             */
            isEqual(other: BitSet): boolean;

            /**
             * Gets a string representation of the entire bitset, including leading 0s
             */
            toString(): string;

            /**
             * Finds first set bit (useful for processing queues, breadth-first tree searches, etc.).
             * Returns -1 if not found
             *
             * @param startWord the word to start with (only used internally by nextSetBit)
             */
            ffs(startWord?: number): number;

            /**
             * Finds first zero (unset bit).
             * Returns -1 if not found
             *
             * @param startWord the word to start with (only used internally by nextUnsetBit)
             */
            ffz(startWord?: number): number;

            /**
             * Finds last set bit.
             * Returns -1 if not found
             *
             * @param startWord the word to start with (only used internally by previousSetBit)
             */
            fls(startWord?: number): number;

            /**
             * Finds last zero (unset bit).
             * Returns -1 if not found
             *
             * @param startWord the word to start with (only used internally by previousUnsetBit)
             */
            flz(startWord?: number): number;

            /**
             * Finds first set bit, starting at a given index.
             * Return -1 if not found
             *
             * @param idx the starting index for the next set bit
             */
            nextSetBit(idx: number): number;

            /**
             * Finds first unset bit, starting at a given index.
             * Return -1 if not found
             *
             * @param idx the starting index for the next unset bit
             */
            nextUnsetBit(idx: number): number;

            /**
             * Finds last set bit, up to a given index.
             * Returns -1 if not found
             *
             * @param idx the starting index for the next unset bit (going in reverse)
             */
            previousSetBit(idx: number): number;

            /**
             * Finds last unset bit, up to a given index.
             * Returns -1 if not found
             */
            previousUnsetBit(idx: number): number;

            /**
             * Converts the bitset to a math.Long number
             */
            toLong(): Long;

            /**
             * Reads an unsigned integer of the given bits from the given offset
             *
             * @param bits number of bits, 1 by default
             * @param offset offset, 0 by default
             */
            readUInt(bits?: number, offset?: number): number;

            /**
             * Writes the given unsigned integer
             *
             * @param val integer
             * @param bits number of bits to write, 1 by default
             * @param offset write offset, 0 by default
             */
            writeUInt(val: number, bits?: number, offset?: number): void;

            /**
             * Creates a new BitSet from the given math.Long number
             */
            static fromLong(l: Long): BitSet;
        }

        /**
         * Returns a random number from min to max - 1
         *
         * @param min lower bound, default is 0
         * @param max upper bound, default is 0xFFFFFFFF
         */
        function random(min?: number, max?: number): number;
    }
}
