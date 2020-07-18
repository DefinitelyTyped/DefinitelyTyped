declare namespace jsrsasign {
    class ECCurveFp {
        a: ECFieldElementFp;
        b: ECFieldElementFp;
        infinity: ECPointFp;
        q: BigInteger;

        constructor(q: BigInteger, a: BigInteger, b: BigInteger);

        decodePointHex(): ECPointFp | null;
        equals(): boolean;
        fromBigInteger(): ECFieldElementFp;
        getA(): ECFieldElementFp;
        getB(): ECFieldElementFp;
        getInfinity(): ECPointFp;
        getQ(): BigInteger;
    }
}
