declare module "node-forge" {
    namespace jsbn {
        interface RandomGenerator {
            nextBytes(bytes: number[]): void;
        }
        class BigInteger {
            static ZERO: BigInteger;
            static ONE: BigInteger;
            constructor(a: null);
            constructor(a: number, c: RandomGenerator);
            constructor(a: number, b: number, c: RandomGenerator);
            constructor(a: string, b?: number);
            constructor(a: number[], b?: number);
            constructor(a: BigInteger);
            data: number[];
            t: number;
            s: number;
            am(i: number, x: number, w: BigInteger, j: number, c: number, n: number): number;
            toString(b?: number): string;
            bitLength(): number;
            negate(): BigInteger;
            abs(): BigInteger;
            compareTo(a: BigInteger): number;
            bitLength(): number;
            mod(a: BigInteger): BigInteger;
            modPowInt(e: number, m: BigInteger): BigInteger;
            clone(): BigInteger;
            intValue(): number;
            byteValue(): number;
            shortValue(): number;
            signum(): number;
            toByteArray(): number[];
            equals(a: BigInteger): boolean;
            min(a: BigInteger): BigInteger;
            max(a: BigInteger): BigInteger;
            and(a: BigInteger): BigInteger;
            or(a: BigInteger): BigInteger;
            xor(a: BigInteger): BigInteger;
            andNot(a: BigInteger): BigInteger;
            not(): BigInteger;
            shiftLeft(n: number): BigInteger;
            shiftRight(n: number): BigInteger;
            getLowestSetBit(): number;
            bitCount(): number;
            testBit(n: number): boolean;
            clearBit(n: number): BigInteger;
            flipBit(n: number): BigInteger;
            add(a: BigInteger): BigInteger;
            subtract(a: BigInteger): BigInteger;
            multiply(a: BigInteger): BigInteger;
            squareTo(a: BigInteger): BigInteger;
            divide(a: BigInteger): BigInteger;
            remainder(a: BigInteger): BigInteger;
            divideAndRemainder(a: BigInteger): BigInteger[]; // Array of 2 items
            pow(e: number): BigInteger;
            modPow(e: BigInteger, m: BigInteger): BigInteger;
            gcd(a: BigInteger): BigInteger;
            modInverse(m: BigInteger): BigInteger;
            isProbablePrime(t: number): boolean;
        }
    }
}
