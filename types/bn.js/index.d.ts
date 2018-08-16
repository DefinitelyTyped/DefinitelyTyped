// Type definitions for bn.js 4.11
// Project: https://github.com/indutny/bn.js
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
//                 Henry Nguyen <https://github.com/HenryNguyen5>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

type Endianness = 'le' | 'be';
type IPrimeName = 'k256' | 'p224' | 'p192' | 'p25519';

declare class RedBN {
    redAdd(b: RedBN): RedBN;
    redIAdd(b: RedBN): RedBN;
    redSub(b: RedBN): RedBN;
    redISub(b: RedBN): RedBN;
    redShl(num: number): RedBN;
    redMul(b: RedBN): RedBN;
    redIMul(b: RedBN): RedBN;
    redSqr(): RedBN;
    redISqr(): RedBN;
    /**
     * @description square root modulo reduction context's prime
     */
    redSqrt(): RedBN;
    /**
     * @description  modular inverse of the number
     */
    redInvm(): RedBN;
    redNeg(): RedBN;
    /**
     * @description modular exponentiation
     */
    redPow(b: RedBN): RedBN;
    fromRed(): BN;
}

// FIXME: not sure how to specify the reduction context here
interface ReductionContext {
    m: number;
    prime: any;
    [key: string]: any;
}

declare class BN {
    constructor(
        number: number | string | number[] | Buffer | BN,
        base?: number,
        endian?: Endianness
    );

    /**
     * @description  create a reduction context
     */
    static red(reductionContext: BN | IPrimeName): ReductionContext;

    /**
     * @description  create a reduction context  with the Montgomery trick.
     */
    static mont(num: BN): ReductionContext;

    /**
     * @description returns true if the supplied object is a BN.js instance
     */
    static isBN(b: any): b is BN;

    /**
     * @description  Convert number to red
     */
    toRed(reductionContext: ReductionContext): RedBN;

    /**
     * @description  clone number
     */
    clone(): BN;

    /**
     * @description  convert to base-string and pad with zeroes
     */
    toString(base?: number | 'hex', length?: number): string;

    /**
     * @description convert to Javascript Number (limited to 53 bits)
     */
    toNumber(): number;

    /**
     * @description convert to JSON compatible hex string (alias of toString(16))
     */
    toJSON(): string;

    /**
     * @description  convert to byte Array, and optionally zero pad to length, throwing if already exceeding
     */
    toArray(endian?: Endianness, length?: number): number[];

    /**
     * @description convert to an instance of `type`, which must behave like an Array
     */
    toArrayLike(
        ArrayType: Buffer | any[],
        endian?: Endianness,
        length?: number
    ): Buffer | any[];

    /**
     * @description  convert to Node.js Buffer (if available). For compatibility with browserify and similar tools, use this instead: a.toArrayLike(Buffer, endian, length)
     */
    toBuffer(endian?: Endianness, length?: number): Buffer;

    /**
     * @description get number of bits occupied
     */
    bitLength(): number;

    /**
     * @description return number of less-significant consequent zero bits (example: 1010000 has 4 zero bits)
     */
    zeroBits(): number;

    /**
     * @description return number of bytes occupied
     */
    byteLength(): number;

    /**
     * @description  true if the number is negative
     */
    isNeg(): boolean;

    /**
     * @description  check if value is even
     */
    isEven(): boolean;

    /**
     * @description   check if value is odd
     */
    isOdd(): boolean;

    /**
     * @description  check if value is zero
     */
    isZero(): boolean;

    /**
     * @description compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result
     */
    cmp(b: BN): -1 | 0 | 1;

    /**
     * @description compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result
     */
    ucmp(b: BN): -1 | 0 | 1;

    /**
     * @description compare numbers and return `-1 (a < b)`, `0 (a == b)`, or `1 (a > b)` depending on the comparison result
     */
    cmpn(b: number): -1 | 0 | 1;

    /**
     * @description a less than b
     */
    lt(b: BN): boolean;

    /**
     * @description a less than b
     */
    ltn(b: number): boolean;

    /**
     * @description a less than or equals b
     */
    lte(b: BN): boolean;

    /**
     * @description a less than or equals b
     */
    lten(b: number): boolean;

    /**
     * @description a greater than b
     */
    gt(b: BN): boolean;

    /**
     * @description a greater than b
     */
    gtn(b: number): boolean;

    /**
     * @description a greater than or equals b
     */
    gte(b: BN): boolean;

    /**
     * @description a greater than or equals b
     */
    gten(b: number): boolean;

    /**
     * @description a equals b
     */
    eq(b: BN): boolean;

    /**
     * @description a equals b
     */
    eqn(b: number): boolean;

    /**
     * @description convert to two's complement representation, where width is bit width
     */
    toTwos(width: number): BN;

    /**
     * @description  convert from two's complement representation, where width is the bit width
     */
    fromTwos(width: number): BN;

    /**
     * @description negate sign
     */
    neg(): BN;

    /**
     * @description negate sign
     */
    ineg(): BN;

    /**
     * @description absolute value
     */
    abs(): BN;

    /**
     * @description absolute value
     */
    iabs(): BN;

    /**
     * @description addition
     */
    add(b: BN): BN;

    /**
     * @description  addition
     */
    iadd(b: BN): BN;

    /**
     * @description addition
     */
    addn(b: number): BN;

    /**
     * @description addition
     */
    iaddn(b: number): BN;

    /**
     * @description subtraction
     */
    sub(b: BN): BN;

    /**
     * @description subtraction
     */
    isub(b: BN): BN;

    /**
     * @description subtraction
     */
    subn(b: number): BN;

    /**
     * @description subtraction
     */
    isubn(b: number): BN;

    /**
     * @description multiply
     */
    mul(b: BN): BN;

    /**
     * @description multiply
     */
    imul(b: BN): BN;

    /**
     * @description multiply
     */
    muln(b: number): BN;

    /**
     * @description multiply
     */
    imuln(b: number): BN;

    /**
     * @description square
     */
    sqr(): BN;

    /**
     * @description square
     */
    isqr(): BN;

    /**
     * @description raise `a` to the power of `b`
     */
    pow(b: BN): BN;

    /**
     * @description divide
     */
    div(b: BN): BN;

    /**
     * @description divide
     */
    divn(b: number): BN;

    /**
     * @description divide
     */
    idivn(b: number): BN;

    /**
     * @description reduct
     */
    mod(b: BN): BN;

    /**
     * @description reduct
     */
    umod(b: BN): BN;

    /**
     * @see API consistency https://github.com/indutny/bn.js/pull/130
     * @description reduct
     */
    modn(b: number): number;

    /**
     * @description  rounded division
     */
    divRound(b: BN): BN;

    /**
     * @description or
     */
    or(b: BN): BN;

    /**
     * @description or
     */
    ior(b: BN): BN;

    /**
     * @description or
     */
    uor(b: BN): BN;

    /**
     * @description or
     */
    iuor(b: BN): BN;

    /**
     * @description and
     */
    and(b: BN): BN;

    /**
     * @description and
     */
    iand(b: BN): BN;

    /**
     * @description and
     */
    uand(b: BN): BN;

    /**
     * @description and
     */
    iuand(b: BN): BN;

    /**
     * @description and (NOTE: `andln` is going to be replaced with `andn` in future)
     */
    andln(b: number): BN;

    /**
     * @description xor
     */
    xor(b: BN): BN;

    /**
     * @description xor
     */
    ixor(b: BN): BN;

    /**
     * @description xor
     */
    uxor(b: BN): BN;

    /**
     * @description xor
     */
    iuxor(b: BN): BN;

    /**
     * @description set specified bit to 1
     */
    setn(b: number): BN;

    /**
     * @description shift left
     */
    shln(b: number): BN;

    /**
     * @description shift left
     */
    ishln(b: number): BN;

    /**
     * @description shift left
     */
    ushln(b: number): BN;

    /**
     * @description shift left
     */
    iushln(b: number): BN;

    /**
     * @description shift right
     */
    shrn(b: number): BN;

    /**
     * @description shift right (unimplemented https://github.com/indutny/bn.js/blob/master/lib/bn.js#L2086)
     */
    ishrn(b: number): BN;

    /**
     * @description shift right
     */
    ushrn(b: number): BN;
    /**
     * @description shift right
     */

    iushrn(b: number): BN;
    /**
     * @description  test if specified bit is set
     */

    testn(b: number): boolean;
    /**
     * @description clear bits with indexes higher or equal to `b`
     */

    maskn(b: number): BN;
    /**
     * @description clear bits with indexes higher or equal to `b`
     */

    imaskn(b: number): BN;
    /**
     * @description add `1 << b` to the number
     */
    bincn(b: number): BN;

    /**
     * @description not (for the width specified by `w`)
     */
    notn(w: number): BN;

    /**
     * @description not (for the width specified by `w`)
     */
    inotn(w: number): BN;

    /**
     * @description GCD
     */
    gcd(b: BN): BN;

    /**
     * @description Extended GCD results `({ a: ..., b: ..., gcd: ... })`
     */
    egcd(b: BN): { a: BN; b: BN; gcd: BN };

    /**
     * @description inverse `a` modulo `b`
     */
    invm(b: BN): BN;
}

export = BN;
