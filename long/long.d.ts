// Type definitions for Long.js v2.2.5
// Project: https://github.com/dcodeIO/Long.js
// Definitions by: Peter Kooijmans <https://github.com/peterkooijmans/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module dcodeIO {
    interface LongStatic {
        new (low: number, high?: number, unsigned?: boolean): Long;

        MAX_UNSIGNED_VALUE: Long;
        MAX_VALUE: Long;
        MIN_VALUE: Long;
        NEG_ONE: Long;
        ONE: Long;
        UONE: Long;
        UZERO: Long;
        ZERO: Long;

        fromBits(lowBits: number, highBits: number, unsigned?: boolean): Long;
        fromInt(value: number, unsigned?: boolean): Long;
        fromNumber(value: number, unsigned?: boolean): Long;
        fromString(str: string, unsigned?: boolean | number, radix?: number): Long;
        fromValue(val: Long | number | string): Long;
        isLong(obj: any): boolean;
    }

    interface Long {
        high: number;
        low: number;
        unsigned: boolean;

        add(other: Long | number | string): Long;
        and(other: Long | number | string): Long;
        compare(other: Long | number | string): number;
        div(divisor: Long | number | string): Long;
        equals(other: Long | number | string): boolean;
        getHighBits(): number;
        getHighBitsUnsigned(): number;
        getLowBits(): number;
        getLowBitsUnsigned(): number;
        getNumBitsAbs(): number;
        greaterThan(other: Long | number | string): boolean;
        greaterThanOrEqual(other: Long | number | string): boolean;
        isEven(): boolean;
        isNegative(): boolean;
        isOdd(): boolean;
        isPositive(): boolean;
        isZero(): boolean;
        lessThan(other: Long | number | string): boolean;
        lessThanOrEqual(other: Long | number | string): boolean;
        modulo(divisor: Long | number | string): Long;
        multiply(multiplier: Long | number | string): Long;
        negate(): Long;
        not(): Long;
        notEquals(other: Long | number | string): boolean;
        or(other: Long | number | string): Long;
        shiftLeft(numBits: number | Long): Long;
        shiftRight(numBits: number | Long): Long;
        shiftRightUnsigned(numBits: number | Long): Long;
        subtract(other: Long | number | string): Long;
        toInt(): number;
        toNumber(): number;
        toSigned(): Long;
        toString(radix?: number): string;
        toUnsigned(): Long;
        xor(other: Long | number | string): Long;
    }

    export var Long: LongStatic;
}

declare module "long" {
    var Long: dcodeIO.LongStatic;
    export = Long;
}