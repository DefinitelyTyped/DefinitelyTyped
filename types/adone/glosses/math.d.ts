export namespace math {
    interface LowHighBits {
        low: number;
        high: number;
    }

    type Longable = math.Long | number | string | LowHighBits;

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

        equals(other: Longable): boolean;

        lessThan(other: Longable): boolean;

        lessThanOrEqual(other: Longable): boolean;

        greaterThan(other: Longable): boolean;

        greaterThanOrEqual(other: Longable): boolean;

        compare(other: Longable): number;

        negate(): Long;

        add(addend: Longable): Long;

        sub(subtrahend: Longable): Long;

        mul(multiplier: Longable): Long;

        div(divisor: Longable): Long;

        mod(divisor: Longable): Long;

        not(): Long;

        and(other: Longable): Long;

        or(other: Longable): Long;

        xor(other: Longable): Long;

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

        static fromValue(val: Longable): Long;

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
