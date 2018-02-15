namespace mathTests {
    const { math } = adone;

    namespace LongTests {
        new math.Long();
        new math.Long(0);
        new math.Long(0, 0);
        new math.Long(0, 0, true);

        namespace toInt {
            const a: number = new math.Long().toInt();
        }

        namespace toNumber {
            const a: number = new math.Long().toNumber();
        }

        namespace toString {
            const a: string = new math.Long().toString();
            const b: string = new math.Long().toString(16);
        }

        namespace getHighBits {
            const a: number = new math.Long().getHighBits();
        }

        namespace getLowBits {
            const a: number = new math.Long().getLowBits();
        }

        namespace getLowBitsUnsigned {
            const a: number = new math.Long().getLowBitsUnsigned();
        }

        namespace getHighBitsUnsigned {
            const a: number = new math.Long().getHighBitsUnsigned();
        }

        namespace getNumBitsAbs {
            const a: number = new math.Long().getNumBitsAbs();
        }

        namespace isZero {
            const a: boolean = new math.Long().isZero();
        }

        namespace isNegative {
            const a: boolean = new math.Long().isNegative();
        }

        namespace isPositive {
            const a: boolean = new math.Long().isPositive();
        }

        namespace isOdd {
            const a: boolean = new math.Long().isOdd();
        }

        namespace isEven {
            const a: boolean = new math.Long().isEven();
        }

        namespace equals {
            const a = new math.Long();
            const b: boolean = a.equals(new math.Long());
            const c: boolean = a.equals(1);
            const d: boolean = a.equals("1");
            const e: boolean = a.equals({ low: 0, high: 0 });
        }

        namespace lessThan {
            const a = new math.Long();
            const b: boolean = a.lessThan(new math.Long());
            const c: boolean = a.lessThan(1);
            const d: boolean = a.lessThan("1");
            const e: boolean = a.lessThan({ low: 0, high: 0 });
        }

        namespace lessThanOrEqual {
            const a = new math.Long();
            const b: boolean = a.lessThanOrEqual(new math.Long());
            const c: boolean = a.lessThanOrEqual(1);
            const d: boolean = a.lessThanOrEqual("1");
            const e: boolean = a.lessThanOrEqual({ low: 0, high: 0 });
        }

        namespace greaterThan {
            const a = new math.Long();
            const b: boolean = a.greaterThan(new math.Long());
            const c: boolean = a.greaterThan(1);
            const d: boolean = a.greaterThan("1");
            const e: boolean = a.greaterThan({ low: 0, high: 0 });
        }

        namespace greaterThanOrEqual {
            const a = new math.Long();
            const b: boolean = a.greaterThanOrEqual(new math.Long());
            const c: boolean = a.greaterThanOrEqual(1);
            const d: boolean = a.greaterThanOrEqual("1");
            const e: boolean = a.greaterThanOrEqual({ low: 0, high: 0 });
        }

        namespace compareTests {
            const a = new math.Long();
            const b: number = a.compare(new math.Long());
            const c: number = a.compare(1);
            const d: number = a.compare("1");
            const e: number = a.compare({ low: 0, high: 0 });
        }

        namespace negate {
            const a: adone.math.Long = new math.Long().negate();
        }

        namespace add {
            const a = new math.Long();
            const b: adone.math.Long = a.add(new math.Long());
            const c: adone.math.Long = a.add(1);
            const d: adone.math.Long = a.add("1");
            const e: adone.math.Long = a.add({ low: 0, high: 0 });
        }

        namespace sub {
            const a = new math.Long();
            const b: adone.math.Long = a.sub(new math.Long());
            const c: adone.math.Long = a.sub(1);
            const d: adone.math.Long = a.sub("1");
            const e: adone.math.Long = a.sub({ low: 0, high: 0 });
        }

        namespace mul {
            const a = new math.Long();
            const b: adone.math.Long = a.mul(new math.Long());
            const c: adone.math.Long = a.mul(1);
            const d: adone.math.Long = a.mul("1");
            const e: adone.math.Long = a.mul({ low: 0, high: 0 });
        }

        namespace div {
            const a = new math.Long();
            const b: adone.math.Long = a.div(new math.Long());
            const c: adone.math.Long = a.div(1);
            const d: adone.math.Long = a.div("1");
            const e: adone.math.Long = a.div({ low: 0, high: 0 });
        }

        namespace mod {
            const a = new math.Long();
            const b: adone.math.Long = a.mod(new math.Long());
            const c: adone.math.Long = a.mod(1);
            const d: adone.math.Long = a.mod("1");
            const e: adone.math.Long = a.mod({ low: 0, high: 0 });
        }

        namespace not {
            const a: adone.math.Long = new math.Long().not();
        }

        namespace and {
            const a = new math.Long();
            const b: adone.math.Long = a.and(new math.Long());
            const c: adone.math.Long = a.and(1);
            const d: adone.math.Long = a.and("1");
            const e: adone.math.Long = a.and({ low: 0, high: 0 });
        }

        namespace or {
            const a = new math.Long();
            const b: adone.math.Long = a.or(new math.Long());
            const c: adone.math.Long = a.or(1);
            const d: adone.math.Long = a.or("1");
            const e: adone.math.Long = a.or({ low: 0, high: 0 });
        }

        namespace xor {
            const a = new math.Long();
            const b: adone.math.Long = a.xor(new math.Long());
            const c: adone.math.Long = a.xor(1);
            const d: adone.math.Long = a.xor("1");
            const e: adone.math.Long = a.xor({ low: 0, high: 0 });
        }

        namespace shl {
            const a = new math.Long();
            const b: adone.math.Long = a.shl(new math.Long());
            const c: adone.math.Long = a.shl(1);
        }

        namespace shr {
            const a = new math.Long();
            const b: adone.math.Long = a.shr(new math.Long());
            const c: adone.math.Long = a.shr(1);
        }

        namespace shru {
            const a = new math.Long();
            const b: adone.math.Long = a.shr(new math.Long());
            const c: adone.math.Long = a.shr(1);
        }

        namespace toSigned {
            const a: adone.math.Long = new math.Long().toSigned();
        }

        namespace toUnsigned {
            const a: adone.math.Long = new math.Long().toUnsigned();
        }

        namespace toBytes {
            const a: number[] = new math.Long().toBytes();
        }

        namespace toBytesLE {
            const a: number[] = new math.Long().toBytesLE();
        }

        namespace static {
            namespace fromInt {
                const a: adone.math.Long = math.Long.fromInt(123);
                const b: adone.math.Long = math.Long.fromInt(123, true);
            }

            namespace fromNumber {
                const a: adone.math.Long = math.Long.fromNumber(123);
                const b: adone.math.Long = math.Long.fromNumber(123, true);
            }

            namespace fromBits {
                const a: adone.math.Long = math.Long.fromBits(0, 0);
                const b: adone.math.Long = math.Long.fromBits(123, 0, true);
            }

            namespace fromString {
                const a: adone.math.Long = math.Long.fromString("123");
                const b: adone.math.Long = math.Long.fromString("123", true);
                const c: adone.math.Long = math.Long.fromString("123", 16);
                const d: adone.math.Long = math.Long.fromString("123", true, 16);
            }

            namespace fromValue {
                const a: adone.math.Long = math.Long.fromValue(new math.Long());
                const b: adone.math.Long = math.Long.fromValue(1);
                const c: adone.math.Long = math.Long.fromValue("1");
                const e: adone.math.Long = math.Long.fromValue({ low: 0, high: 0 });
            }

            namespace constants {
                const a: adone.math.Long = math.Long.MIN_VALUE;
                const b: adone.math.Long = math.Long.MAX_VALUE;
                const c: adone.math.Long = math.Long.MAX_UNSIGNED_VALUE;
                const d: adone.math.Long = math.Long.ZERO;
                const e: adone.math.Long = math.Long.UZERO;
                const f: adone.math.Long = math.Long.ONE;
                const g: adone.math.Long = math.Long.UONE;
                const h: adone.math.Long = math.Long.NEG_ONE;
            }
        }
    }

    namespace BigNumberTests {
        const { BigNumber } = math;
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

    namespace bitSetTests {
        const { BitSet } = math;
        type BitSet = adone.math.BitSet;

        new BitSet(10);
        new BitSet(new BitSet(10).dehydrate());

        { const a: boolean = new BitSet(10).get(0); }
        { const a: boolean = new BitSet(10).set(0); }
        { const a: boolean = new BitSet(10).setRange(0, 10); }
        { const a: boolean = new BitSet(10).unset(0); }
        { const a: boolean = new BitSet(10).unsetRange(0, 10); }
        { const a: boolean = new BitSet(10).toggle(0); }
        { const a: boolean = new BitSet(10).toggleRange(0, 10); }
        { const a: boolean = new BitSet(10).clear(); }
        { const a: BitSet = new BitSet(10).clone(); }
        { const a: string = new BitSet(10).dehydrate(); }

        { const a: BitSet = new BitSet(10).and(1); }
        { const a: BitSet = new BitSet(10).and(new BitSet(10)); }

        { const a: BitSet = new BitSet(10).or(1); }
        { const a: BitSet = new BitSet(10).or(new BitSet(10)); }

        { const a: BitSet = new BitSet(10).xor(1); }
        { const a: BitSet = new BitSet(10).xor(new BitSet(10)); }

        new BitSet(10).forEach((x: number) => {});
        new BitSet(10).forEach((x: number) => false);

        { const a: BitSet = new BitSet(10).circularShift(10); }
        { const a: number = new BitSet(10).getCardinality(); }
        { const a: number[] = new BitSet(10).getIndices(); }
        { const a: boolean = new BitSet(10).isSubsetOf(new BitSet(10)); }
        { const a: boolean = new BitSet(10).isEmpty(); }
        { const a: boolean = new BitSet(10).isEqual(new BitSet(10)); }
        { const a: string = new BitSet(10).toString(); }
        { const a: number = new BitSet(10).ffs(); }
        { const a: number = new BitSet(10).ffs(1); }
        { const a: number = new BitSet(10).ffz(); }
        { const a: number = new BitSet(10).ffz(1); }
        { const a: number = new BitSet(10).fls(); }
        { const a: number = new BitSet(10).fls(1); }
        { const a: number = new BitSet(10).flz(); }
        { const a: number = new BitSet(10).flz(1); }
        { const a: number = new BitSet(10).nextSetBit(1); }
        { const a: number = new BitSet(10).nextUnsetBit(1); }
        { const a: number = new BitSet(10).previousSetBit(1); }
        { const a: number = new BitSet(10).previousUnsetBit(1); }
        { const a: number = new BitSet(10).readUInt(); }
        { const a: number = new BitSet(10).readUInt(1); }
        { const a: number = new BitSet(10).readUInt(1, 2); }
        { new BitSet(10).writeUInt(1); }
        { new BitSet(10).writeUInt(1, 2); }
        { new BitSet(10).writeUInt(1, 2, 3); }
        { const a: BitSet = BitSet.fromLong(new adone.math.Long(10, 20)); }
    }

    namespace randomTests {
        const { random } = math;
        random();
        random(100);
        random(0, 10);
    }
}
