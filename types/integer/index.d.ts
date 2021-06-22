// Type definitions for integer 4.0
// Project: https://github.com/JoshuaWise/integer#readme
// Definitions by: Ben Davies <https://github.com/Morfent>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// This can't just be written as a simple class since Integer instances can't
// be constructed by its actual constructor without throwing, but calling it as
// a regular function constructs new instances just fine...
declare function Integer(val: Integer.IntLike): Integer.IntClass;

declare namespace Integer {
    type IntLike = number | string | IntClass;

    function fromBits(lowBits: number, highBits?: number): IntClass;
    function fromNumber(val: number, defaultVal?: number | IntClass): IntClass;
    function fromString(val: string, radix?: number, defaultVal?: string | IntClass): IntClass;
    function isInstance(val: any): boolean;

    const MAX_VALUE: IntClass;
    const MIN_VALUE: IntClass;
    const ZERO: IntClass;
    const ONE: IntClass;
    const NEG_ONE: IntClass;

    class IntClass {
        readonly low: number;
        readonly high: number;
        constructor(val: IntLike);

        add(augend: IntLike): IntClass;
        plus(augend: IntLike): IntClass;

        sub(subtrahend: IntLike): IntClass;
        subtract(subtrahend: IntLike): IntClass;
        minus(subtrahend: IntLike): IntClass;

        mul(multiplier: IntLike): IntClass;
        multiply(multiplier: IntLike): IntClass;
        times(multiplier: IntLike): IntClass;

        div(divisor: IntLike): IntClass;
        divide(divisor: IntLike): IntClass;
        divideBy(divisor: IntLike): IntClass;
        dividedBy(divisor: IntLike): IntClass;
        over(divisor: IntLike): IntClass;

        mod(divisor: IntLike): IntClass;
        modulo(divisor: IntLike): IntClass;

        neg(): IntClass;
        negate(): IntClass;

        abs(): IntClass;
        absoluteValue(): IntClass;

        and(bits: IntLike): IntClass;
        or(bits: IntLike): IntClass;
        xor(bits: IntLike): IntClass;
        not(): IntClass;

        shl(bits: number): IntClass;
        shiftLeft(bits: number): IntClass;
        shr(bits: number): IntClass;
        shiftRight(bits: number): IntClass;

        eq(val: IntLike): boolean;
        equals(val: IntLike): boolean;
        isEqualTo(val: IntLike): boolean;

        neq(val: IntLike): boolean;
        notEquals(val: IntLike): boolean;
        isNotEqualTo(val: IntLike): boolean;
        doesNotEqual(val: IntLike): boolean;

        gt(val: IntLike): boolean;
        greaterThan(val: IntLike): boolean;
        isGreaterThan(val: IntLike): boolean;
        gte(val: IntLike): boolean;
        greaterThanOrEquals(val: IntLike): boolean;
        isGreaterThanOrEqualTo(val: IntLike): boolean;

        lt(val: IntLike): boolean;
        lessThan(val: IntLike): boolean;
        isLessThan(val: IntLike): boolean;
        lte(val: IntLike): boolean;
        lessThanOrEquals(val: IntLike): boolean;
        isLessThanOrEqualTo(val: IntLike): boolean;

        compare(val: IntLike): -1 | 0 | 1;

        bitSizeAbs(): number;

        isEven(): boolean;
        isOdd(): boolean;
        isPositive(): boolean;
        isNegative(): boolean;
        isZero(): boolean;
        isNonZero(): boolean;
        isNotZero(): boolean;
        isSafe(): boolean;
        isUnsafe(): boolean;

        toNumber(): number;
        toNumberUnsafe(): number;
        toString(radix?: number): string;
        valueOf(): number;
    }
}

export = Integer;
