// Type definitions for jsbn v1.2
// Project: http://www-cs-students.stanford.edu/%7Etjw/jsbn/
// Definitions by: Eugene Chernyshov <https://github.com/Evgenus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jsbn {

    interface RandomGenerator {
        nextBytes(bytes: number[]): void;
    }

    export class BigInteger {
        constructor(a: number, c: RandomGenerator);
        constructor(a: number, b: number, c: RandomGenerator);
        constructor(a: string, b?: number);
        constructor(a: number[], b?: number);
        constructor(a: BigInteger);

        s: number;
        t: number;
        data: number[]; // forge specific

        DB: number;
        DM: number;
        DV: number;

        FV: number;
        F1: number;
        F2: number;

        // am: Compute w_j += (x*this_i), propagate carries,
        am(i: number, x: number, w: BigInteger, j: number, c: number, n: number): number;

        // (protected) copy this to r
        copyTo(r: BigInteger): void;

        // (protected) set from integer value x, -DV <= x < DV
        fromInt(x: number): void;

        // (protected) set from string and radix
        fromString(x: string, b: number): void;

        // (protected) clamp off excess high words
        clamp(): void;

        // (public) return string representation in given radix
        toString(b?: number): string;

        // (public) -this
        negate(): BigInteger;

        // (public) |this|
        abs(): BigInteger;

        // (public) return + if this > a, - if this < a, 0 if equal
        compareTo(a: BigInteger): number;

        // (public) return the number of bits in "this"
        bitLength(): number;

        // (protected) r = this << n*DB
        dlShiftTo(n: number, r: BigInteger): void;

        // (protected) r = this >> n*DB
        drShiftTo(n: number, r: BigInteger): void;

        // (protected) r = this << n
        lShiftTo(n: number, r: BigInteger): void;

        // (protected) r = this >> n
        rShiftTo(n: number, r: BigInteger): void;

        // (protected) r = this - a
        subTo(a: BigInteger, r: BigInteger): void;

        // (protected) r = this * a, r != this,a (HAC 14.12)
        multiplyTo(a: BigInteger, r: BigInteger): void;

        // (protected) r = this^2, r != this (HAC 14.16)
        squareTo(r: BigInteger): void;

        // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
        // r != q, this != m.  q or r may be null.
        divRemTo(m: BigInteger, q: BigInteger, r: BigInteger): void;

        // (public) this mod a
        mod(a: BigInteger): BigInteger;

        // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
        invDigit(): number;

        // (protected) true iff this is even
        isEven(): boolean;

        // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
        exp(e: number, z: Reduction): BigInteger;

        // (public) this^e % m, 0 <= e < 2^32
        modPowInt(e: number, m: BigInteger): BigInteger;

        // (public)
        clone(): BigInteger;

        // (public) return value as integer
        intValue(): number;

        // (public) return value as byte
        byteValue(): number;

        // (public) return value as short (assumes DB>=16)
        shortValue(): number;

        // (protected) return x s.t. r^x < DV
        chunkSize(r: number): number;

        // (public) 0 if this == 0, 1 if this > 0
        signum(): number;

        // (protected) convert to radix string
        toRadix(b: number): string;

        // (protected) convert from radix string
        fromRadix(s: string, b: number): void;

        // (protected) alternate constructor
        fromNumber(a: number, b?: number, c?: number): void;

        // (public) convert to bigendian byte array
        toByteArray(): number[];

        equals(a: BigInteger): boolean;

        min(a: BigInteger): BigInteger;

        max(a: BigInteger): BigInteger;

        // (protected) r = this op a (bitwise)
        bitwiseTo(a: BigInteger, op: (x: number, y: number) => number, r: BigInteger): void;

        // (public) this & a
        and(a: BigInteger): BigInteger;

        // (public) this | a
        or(a: BigInteger): BigInteger;

        // (public) this ^ a
        xor(a: BigInteger): BigInteger;

        // (public) this & ~a
        andNot(a: BigInteger): BigInteger;

        // (public) ~this
        not(): BigInteger;

        // (public) this << n
        shiftLeft(n: number): BigInteger;

        // (public) this >> n
        shiftRight(n: number): BigInteger;

        // (public) returns index of lowest 1-bit (or -1 if none)
        getLowestSetBit(): number;

        // (public) return number of set bits
        bitCount(): number;

        // (public) true iff nth bit is set
        testBit(n: number): boolean;

        // (protected) this op (1<<n)
        changeBit(n: number, op: (x: number, y: number) => number): BigInteger;

        // (protected) this op (1<<n)
        setBit(n: number): BigInteger;

        // (public) this & ~(1<<n)
        clearBit(n: number): BigInteger

        // (public) this ^ (1<<n)
        flipBit(n: number): BigInteger

        // (protected) r = this + a
        addTo(a: BigInteger, r: BigInteger): void;

        // (public) this + a
        add(a: BigInteger): BigInteger;

        // (public) this - a
        subtract(a: BigInteger): BigInteger;

        // (public) this * a
        multiply(a: BigInteger): BigInteger;

        // (public) this^2
        square(): BigInteger;

        // (public) this / a
        divide(a: BigInteger): BigInteger;

        // (public) this % a
        remainder(a: BigInteger): BigInteger;

        // (public) [this/a,this%a]
        divideAndRemainder(a: BigInteger): BigInteger[]; // Array of 2 items

        // (protected) this *= n, this >= 0, 1 < n < DV
        dMultiply(n: number): void;

        // (protected) this += n << w words, this >= 0
        dAddOffset(n: number, w: number): void;

        // (public) this^e
        pow(e: number): BigInteger;

        // (protected) r = lower n words of "this * a", a.t <= n
        multiplyLowerTo(a: BigInteger, n: number, r: BigInteger): void;

        // (protected) r = "this * a" without lower n words, n > 0
        multiplyUpperTo(a: BigInteger, n: number, r: BigInteger): void;

        // (public) this^e % m (HAC 14.85)
        modPow(e: BigInteger, m: BigInteger): BigInteger;

        // (public) gcd(this,a) (HAC 14.54)
        gcd(a: BigInteger): BigInteger;

        // (protected) this % n, n < 2^26
        modInt(n: number): number;

        // (public) 1/this % m (HAC 14.61)
        modInverse(m: BigInteger): BigInteger;

        // (public) test primality with certainty >= 1-.5^t
        isProbablePrime(t: number): boolean;

        // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
        millerRabin(t: number): boolean;

        static ZERO: BigInteger;
        static ONE: BigInteger;
    }

    interface Reduction {
        convert(x: BigInteger): BigInteger;
        revert(x: BigInteger): BigInteger;
        reduce(x: BigInteger): void;
        mulTo(x: BigInteger, y: BigInteger, r: BigInteger): void;
        sqrTo(x: BigInteger, r: BigInteger): void;
    }
}
