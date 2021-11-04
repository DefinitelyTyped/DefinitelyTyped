declare namespace jsrsasign {
    class BigInteger {
        static readonly ZERO: BigInteger;
        static readonly ONE: BigInteger;
        abs(): BigInteger;
        bitLength(): number;
        compareTo(a: BigInteger): number;
        mod(a: BigInteger): BigInteger;
        modPowInt(e: number, m: BigInteger): BigInteger;
        negate(): BigInteger;
        toString(b: number): string;
    }
}
