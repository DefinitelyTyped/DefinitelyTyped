/**
 * math related things
 */
export namespace math {
    namespace I {
        interface LowHighBits {
            low: number;
            high: number;
        }
        type Longable = math.Long | number | string | LowHighBits;
    }

    export class Long {
        constructor(low?: number, high?: number, unsigned?: boolean);

        toInt(): number;

        toNumber(): number;

        toString(radix?: number): string;

        getHighBits(): number;

        getHighBitsUnsigned(): number;

        getLowBits(): number;

        getLowBitsUnsigned(): number;

        getNumBitsAbs(): number;

        isZero(): boolean;

        isNegative(): boolean;

        isPositive(): boolean;

        isOdd(): boolean;

        isEven(): boolean;

        equals(other: I.Longable): boolean;

        lessThan(other: I.Longable): boolean;

        lessThanOrEqual(other: I.Longable): boolean;

        greaterThan(other: I.Longable): boolean;

        greaterThanOrEqual(other: I.Longable): boolean;

        compare(other: I.Longable): number;

        negate(): Long;

        add(addend: I.Longable): Long;

        sub(subtrahend: I.Longable): Long;

        mul(multiplier: I.Longable): Long;

        div(divisor: I.Longable): Long;

        mod(divisor: I.Longable): Long;

        not(): Long;

        and(other: I.Longable): Long;

        or(other: I.Longable): Long;

        xor(other: I.Longable): Long;

        shl(numBits: number | Long): Long;

        shr(numBits: number | Long): Long;

        shru(numBits: number | Long): Long;

        toSigned(): Long;

        toUnsigned(): Long;

        toBytes(le?: boolean): number[];

        toBytesLE(): number[];

        toBytesBE(): number[];

        static fromInt(value: number, unsigned?: boolean): Long;

        static fromNumber(value?: number, unsigned?: boolean): Long;

        static fromBits(lowBits: number, highBits: number, unsigned?: boolean): Long;

        static fromString(str: string, unsigned?: boolean, radix?: number): Long;

        static fromString(str: string, radix?: number): Long;

        static fromValue(val: I.Longable): Long;

        static MIN_VALUE: Long;

        static MAX_VALUE: Long;

        static MAX_UNSIGNED_VALUE: Long;

        static ZERO: Long;

        static UZERO: Long;

        static ONE: Long;

        static UONE: Long;

        static NEG_ONE: Long;
    }
}
