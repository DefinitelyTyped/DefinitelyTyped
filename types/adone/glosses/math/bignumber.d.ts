declare namespace adone.math {
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
}
