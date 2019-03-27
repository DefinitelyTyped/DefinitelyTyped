namespace mathTests.bignumberTests {
    const {
        math: {
            BigNumber
        }
    } = adone;

    type BigNumber = adone.math.BigNumber;

    new BigNumber(10);
    new BigNumber("10");
    new BigNumber(new BigNumber(10));
    new BigNumber("10", 2);

    { const a: string = new BigNumber(1).toString(); }
    { const a: string = new BigNumber(1).toString(2); }

    { const a: number = new BigNumber(1).toNumber(); }

    { const a: Buffer = new BigNumber(1).toBuffer(); }
    { const a: Buffer = new BigNumber(1).toBuffer({}); }
    { const a: Buffer = new BigNumber(1).toBuffer({ endian: 1 }); }
    { const a: Buffer = new BigNumber(1).toBuffer({ endian: -1 }); }
    { const a: Buffer = new BigNumber(1).toBuffer({ endian: "big" }); }
    { const a: Buffer = new BigNumber(1).toBuffer({ endian: "little" }); }
    { const a: Buffer = new BigNumber(1).toBuffer({ size: 1 }); }
    { const a: Buffer = new BigNumber(1).toBuffer({ size: "auto" }); }

    { const a: BigNumber = new BigNumber(10).add(1); }
    { const a: BigNumber = new BigNumber(10).add("1"); }
    { const a: BigNumber = new BigNumber(10).add(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).sub(1); }
    { const a: BigNumber = new BigNumber(10).sub("1"); }
    { const a: BigNumber = new BigNumber(10).sub(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).mul(1); }
    { const a: BigNumber = new BigNumber(10).mul("1"); }
    { const a: BigNumber = new BigNumber(10).mul(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).div(1); }
    { const a: BigNumber = new BigNumber(10).div("1"); }
    { const a: BigNumber = new BigNumber(10).div(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).abs(); }

    { const a: BigNumber = new BigNumber(10).neg(); }

    { const a: number = new BigNumber(10).cmp(1); }
    { const a: number = new BigNumber(10).cmp("1"); }
    { const a: number = new BigNumber(10).cmp(new BigNumber(1)); }

    { const a: boolean = new BigNumber(10).gt(1); }
    { const a: boolean = new BigNumber(10).gt("1"); }
    { const a: boolean = new BigNumber(10).gt(new BigNumber(10)); }

    { const a: boolean = new BigNumber(10).ge(1); }
    { const a: boolean = new BigNumber(10).ge("1"); }
    { const a: boolean = new BigNumber(10).ge(new BigNumber(10)); }

    { const a: boolean = new BigNumber(10).eq(1); }
    { const a: boolean = new BigNumber(10).eq("1"); }
    { const a: boolean = new BigNumber(10).eq(new BigNumber(10)); }

    { const a: boolean = new BigNumber(10).lt(1); }
    { const a: boolean = new BigNumber(10).lt("1"); }
    { const a: boolean = new BigNumber(10).lt(new BigNumber(10)); }

    { const a: boolean = new BigNumber(10).le(1); }
    { const a: boolean = new BigNumber(10).le("1"); }
    { const a: boolean = new BigNumber(10).le(new BigNumber(10)); }

    { const a: BigNumber = new BigNumber(10).and(1); }
    { const a: BigNumber = new BigNumber(10).and("1"); }
    { const a: BigNumber = new BigNumber(10).and(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).or(1); }
    { const a: BigNumber = new BigNumber(10).or("1"); }
    { const a: BigNumber = new BigNumber(10).or(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).xor(1); }
    { const a: BigNumber = new BigNumber(10).xor("1"); }
    { const a: BigNumber = new BigNumber(10).xor(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).mod(1); }
    { const a: BigNumber = new BigNumber(10).mod("1"); }
    { const a: BigNumber = new BigNumber(10).mod(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).pow(1); }
    { const a: BigNumber = new BigNumber(10).pow("1"); }
    { const a: BigNumber = new BigNumber(10).pow(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).powm(1, 1); }
    { const a: BigNumber = new BigNumber(10).powm("1", 1); }
    { const a: BigNumber = new BigNumber(10).powm(new BigNumber(1), 1); }
    { const a: BigNumber = new BigNumber(10).powm(1, "1"); }
    { const a: BigNumber = new BigNumber(10).powm("1", "1"); }
    { const a: BigNumber = new BigNumber(10).powm(new BigNumber(1), "1"); }
    { const a: BigNumber = new BigNumber(10).powm(1, new BigNumber(1)); }
    { const a: BigNumber = new BigNumber(10).powm("1", new BigNumber(1)); }
    { const a: BigNumber = new BigNumber(10).powm(new BigNumber(1), new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).invertm(1); }
    { const a: BigNumber = new BigNumber(10).invertm("1"); }
    { const a: BigNumber = new BigNumber(10).invertm(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).rand(); }
    { const a: BigNumber = new BigNumber(10).rand(1); }
    { const a: BigNumber = new BigNumber(10).rand("1"); }
    { const a: BigNumber = new BigNumber(10).rand(new BigNumber(1)); }

    { const a: boolean | "maybe" = new BigNumber(10).probPrime(); }

    { const a: BigNumber = new BigNumber(10).nextPrime(); }

    { const a: BigNumber = new BigNumber(10).sqrt(); }

    { const a: BigNumber = new BigNumber(10).root(1); }
    { const a: BigNumber = new BigNumber(10).root("1"); }
    { const a: BigNumber = new BigNumber(10).root(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).shiftLeft(1); }
    { const a: BigNumber = new BigNumber(10).shiftLeft("1"); }
    { const a: BigNumber = new BigNumber(10).shiftLeft(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).shiftRight(1); }
    { const a: BigNumber = new BigNumber(10).shiftRight("1"); }
    { const a: BigNumber = new BigNumber(10).shiftRight(new BigNumber(1)); }

    { const a: BigNumber = new BigNumber(10).gcd(1); }
    { const a: BigNumber = new BigNumber(10).gcd("1"); }
    { const a: BigNumber = new BigNumber(10).gcd(new BigNumber(1)); }

    { const a: number = new BigNumber(10).jacobi(1); }
    { const a: number = new BigNumber(10).jacobi("1"); }
    { const a: number = new BigNumber(10).jacobi(new BigNumber(1)); }

    { const a: number = new BigNumber(10).bitLength(); }

    { const a: boolean = new BigNumber(10).isBitSet(10); }

    { const a: BigNumber = BigNumber.prime(10); }
    { const a: BigNumber = BigNumber.prime(10, true); }

    { const a: BigNumber = BigNumber.fromBuffer(Buffer.alloc(10)); }
    { const a: BigNumber = BigNumber.fromBuffer(Buffer.alloc(10), { endian: "little" }); }
    { const a: BigNumber = BigNumber.fromBuffer(Buffer.alloc(10), { endian: -1 }); }
    { const a: BigNumber = BigNumber.fromBuffer(Buffer.alloc(10), { endian: 1 }); }
    { const a: BigNumber = BigNumber.fromBuffer(Buffer.alloc(10), { endian: "big" }); }
    { const a: BigNumber = BigNumber.fromBuffer(Buffer.alloc(10), { size: "auto" }); }

    { const a: BigNumber = BigNumber.ONE; }
    { const a: BigNumber = BigNumber.ZERO; }
}
