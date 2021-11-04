declare namespace jsrsasign {
    class ECPointFp {
        curve: ECFieldElementFp;
        x: ECFieldElementFp;
        y: ECFieldElementFp;
        z: BigInteger;
        zinv: BigInteger | null;

        constructor(curve: ECFieldElementFp, x: ECFieldElementFp, y: ECFieldElementFp, z: BigInteger | null);
    }
}
