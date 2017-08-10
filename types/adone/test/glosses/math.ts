const { math } = adone;

namespace mathTests {
    namespace Long {
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

        namespace greaterThanOrEqual {
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
}
