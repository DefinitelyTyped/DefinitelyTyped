namespace mathTests.longTests {
    const {
        math: {
            Long
        }
    } = adone;

    new Long();
    new Long(0);
    new Long(0, 0);
    new Long(0, 0, true);

    namespace toInt {
        const a: number = new Long().toInt();
    }

    namespace toNumber {
        const a: number = new Long().toNumber();
    }

    namespace toString {
        const a: string = new Long().toString();
        const b: string = new Long().toString(16);
    }

    namespace getHighBits {
        const a: number = new Long().getHighBits();
    }

    namespace getLowBits {
        const a: number = new Long().getLowBits();
    }

    namespace getLowBitsUnsigned {
        const a: number = new Long().getLowBitsUnsigned();
    }

    namespace getHighBitsUnsigned {
        const a: number = new Long().getHighBitsUnsigned();
    }

    namespace getNumBitsAbs {
        const a: number = new Long().getNumBitsAbs();
    }

    namespace isZero {
        const a: boolean = new Long().isZero();
    }

    namespace isNegative {
        const a: boolean = new Long().isNegative();
    }

    namespace isPositive {
        const a: boolean = new Long().isPositive();
    }

    namespace isOdd {
        const a: boolean = new Long().isOdd();
    }

    namespace isEven {
        const a: boolean = new Long().isEven();
    }

    namespace equals {
        const a = new Long();
        const b: boolean = a.equals(new Long());
        const c: boolean = a.equals(1);
        const d: boolean = a.equals("1");
        const e: boolean = a.equals({ low: 0, high: 0 });
    }

    namespace lessThan {
        const a = new Long();
        const b: boolean = a.lessThan(new Long());
        const c: boolean = a.lessThan(1);
        const d: boolean = a.lessThan("1");
        const e: boolean = a.lessThan({ low: 0, high: 0 });
    }

    namespace lessThanOrEqual {
        const a = new Long();
        const b: boolean = a.lessThanOrEqual(new Long());
        const c: boolean = a.lessThanOrEqual(1);
        const d: boolean = a.lessThanOrEqual("1");
        const e: boolean = a.lessThanOrEqual({ low: 0, high: 0 });
    }

    namespace greaterThan {
        const a = new Long();
        const b: boolean = a.greaterThan(new Long());
        const c: boolean = a.greaterThan(1);
        const d: boolean = a.greaterThan("1");
        const e: boolean = a.greaterThan({ low: 0, high: 0 });
    }

    namespace greaterThanOrEqual {
        const a = new Long();
        const b: boolean = a.greaterThanOrEqual(new Long());
        const c: boolean = a.greaterThanOrEqual(1);
        const d: boolean = a.greaterThanOrEqual("1");
        const e: boolean = a.greaterThanOrEqual({ low: 0, high: 0 });
    }

    namespace compareTests {
        const a = new Long();
        const b: number = a.compare(new Long());
        const c: number = a.compare(1);
        const d: number = a.compare("1");
        const e: number = a.compare({ low: 0, high: 0 });
    }

    namespace negate {
        const a: adone.math.Long = new Long().negate();
    }

    namespace add {
        const a = new Long();
        const b: adone.math.Long = a.add(new Long());
        const c: adone.math.Long = a.add(1);
        const d: adone.math.Long = a.add("1");
        const e: adone.math.Long = a.add({ low: 0, high: 0 });
    }

    namespace sub {
        const a = new Long();
        const b: adone.math.Long = a.sub(new Long());
        const c: adone.math.Long = a.sub(1);
        const d: adone.math.Long = a.sub("1");
        const e: adone.math.Long = a.sub({ low: 0, high: 0 });
    }

    namespace mul {
        const a = new Long();
        const b: adone.math.Long = a.mul(new Long());
        const c: adone.math.Long = a.mul(1);
        const d: adone.math.Long = a.mul("1");
        const e: adone.math.Long = a.mul({ low: 0, high: 0 });
    }

    namespace div {
        const a = new Long();
        const b: adone.math.Long = a.div(new Long());
        const c: adone.math.Long = a.div(1);
        const d: adone.math.Long = a.div("1");
        const e: adone.math.Long = a.div({ low: 0, high: 0 });
    }

    namespace mod {
        const a = new Long();
        const b: adone.math.Long = a.mod(new Long());
        const c: adone.math.Long = a.mod(1);
        const d: adone.math.Long = a.mod("1");
        const e: adone.math.Long = a.mod({ low: 0, high: 0 });
    }

    namespace not {
        const a: adone.math.Long = new Long().not();
    }

    namespace and {
        const a = new Long();
        const b: adone.math.Long = a.and(new Long());
        const c: adone.math.Long = a.and(1);
        const d: adone.math.Long = a.and("1");
        const e: adone.math.Long = a.and({ low: 0, high: 0 });
    }

    namespace or {
        const a = new Long();
        const b: adone.math.Long = a.or(new Long());
        const c: adone.math.Long = a.or(1);
        const d: adone.math.Long = a.or("1");
        const e: adone.math.Long = a.or({ low: 0, high: 0 });
    }

    namespace xor {
        const a = new Long();
        const b: adone.math.Long = a.xor(new Long());
        const c: adone.math.Long = a.xor(1);
        const d: adone.math.Long = a.xor("1");
        const e: adone.math.Long = a.xor({ low: 0, high: 0 });
    }

    namespace shl {
        const a = new Long();
        const b: adone.math.Long = a.shl(new Long());
        const c: adone.math.Long = a.shl(1);
    }

    namespace shr {
        const a = new Long();
        const b: adone.math.Long = a.shr(new Long());
        const c: adone.math.Long = a.shr(1);
    }

    namespace shru {
        const a = new Long();
        const b: adone.math.Long = a.shr(new Long());
        const c: adone.math.Long = a.shr(1);
    }

    namespace toSigned {
        const a: adone.math.Long = new Long().toSigned();
    }

    namespace toUnsigned {
        const a: adone.math.Long = new Long().toUnsigned();
    }

    namespace toBytes {
        const a: number[] = new Long().toBytes();
    }

    namespace toBytesLE {
        const a: number[] = new Long().toBytesLE();
    }

    namespace static {
        namespace fromInt {
            const a: adone.math.Long = Long.fromInt(123);
            const b: adone.math.Long = Long.fromInt(123, true);
        }

        namespace fromNumber {
            const a: adone.math.Long = Long.fromNumber(123);
            const b: adone.math.Long = Long.fromNumber(123, true);
        }

        namespace fromBits {
            const a: adone.math.Long = Long.fromBits(0, 0);
            const b: adone.math.Long = Long.fromBits(123, 0, true);
        }

        namespace fromString {
            const a: adone.math.Long = Long.fromString("123");
            const b: adone.math.Long = Long.fromString("123", true);
            const c: adone.math.Long = Long.fromString("123", 16);
            const d: adone.math.Long = Long.fromString("123", true, 16);
        }

        namespace fromValue {
            const a: adone.math.Long = Long.fromValue(new Long());
            const b: adone.math.Long = Long.fromValue(1);
            const c: adone.math.Long = Long.fromValue("1");
            const e: adone.math.Long = Long.fromValue({ low: 0, high: 0 });
        }

        namespace constants {
            const a: adone.math.Long = Long.MIN_VALUE;
            const b: adone.math.Long = Long.MAX_VALUE;
            const c: adone.math.Long = Long.MAX_UNSIGNED_VALUE;
            const d: adone.math.Long = Long.ZERO;
            const e: adone.math.Long = Long.UZERO;
            const f: adone.math.Long = Long.ONE;
            const g: adone.math.Long = Long.UONE;
            const h: adone.math.Long = Long.NEG_ONE;
        }
    }
}
