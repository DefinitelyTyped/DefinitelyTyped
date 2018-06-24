// Type definitions for bn.js 4.11
// Project: https://github.com/indutny/bn.js
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
//                 Jaco Greeff <https://github.com/jacogr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

type Endianness = 'le' | 'be';

declare class BN {
    constructor(num: number | string | number[] | Buffer, base?: number, endian?: Endianness);

    static isBN(val: any): val is BN;

    abs(): BN;
    iabs(): BN;
    uabs(): BN;
    add(bn: BN): BN;
    addn(num: number): BN;
    iadd(bn: BN): BN;
    iaddn(num: number): BN;
    uadd(bn: BN): BN;
    uaddn(num: number): BN;
    and(bn: BN): BN;
    andn(num: number): BN;
    iand(bn: BN): BN;
    iandn(num: number): BN;
    uand(bn: BN): BN;
    uandn(num: number): BN;
    bincn(num: number): BN;
    bitLength(): number;
    byteLength(): number;
    clone(): BN;
    cmp(bn: BN): number;
    cmpn(num: number): number;
    div(bn: BN): BN;
    divn(num: number): BN;
    idiv(bn: BN): BN;
    idivn(num: number): BN;
    udiv(bn: BN): BN;
    udivn(num: number): BN;
    divRound(bn: BN): BN;
    divRoundn(num: number): BN;
    idivRound(bn: BN): BN;
    idivRoundn(num: number): BN;
    udivRound(bn: BN): BN;
    udivRoundn(num: number): BN;
    egcd(bn: BN): { a: BN; bn: BN; gcd: BN };
    eq(bn: BN): boolean;
    eqn(num: number): boolean;
    fromTwos(width: number): BN;
    gcd(bn: BN): BN;
    gt(bn: BN): boolean;
    gtn(num: number): boolean;
    gte(bn: BN): boolean;
    gten(num: number): boolean;
    invm(bn: BN): BN;
    isEven(): boolean;
    isNeg(): boolean;
    isOdd(): boolean;
    isZero(): boolean;
    lt(bn: BN): boolean;
    ltn(num: number): boolean;
    lte(bn: BN): boolean;
    lten(num: number): boolean;
    maskn(mask: number): BN;
    imaskn(mask: number): BN;
    umaskn(mask: number): BN;
    mod(mod: BN): BN;
    modn(mod: number): BN;
    imod(mod: BN): BN;
    imodn(mod: number): BN;
    umod(mod: BN): BN;
    umodn(mod: number): BN;
    mul(bn: BN): BN;
    muln(num: number): BN;
    imul(bn: BN): BN;
    imuln(num: number): BN;
    umul(bn: BN): BN;
    umuln(num: number): BN;
    neg(): BN;
    notn(bit: number): BN;
    or(bn: BN): BN;
    ot(num: number): BN;
    pow(pow: BN): BN;
    pown(pow: number): BN;
    ipow(pow: BN): BN;
    ipown(pow: number): BN;
    upow(pow: BN): BN;
    upown(pow: number): BN;
    setn(bit: number): BN;
    shln(num: number): BN;
    iushln(num: number): BN;
    ushln(num: number): BN;
    shrn(num: number): BN;
    iushrn(num: number): BN;
    ushrn(num: number): BN;
    sqr(): BN;
    isqr(): BN;
    sub(bn: BN): BN;
    subn(num: number): BN;
    isub(bn: BN): BN;
    isubn(num: number): BN;
    usub(bn: BN): BN;
    usubn(num: number): BN;
    testn(bit: number): BN;
    toArray(endian?: Endianness, len?: number): number[];
    toBuffer(endian?: Endianness, len?: number): Buffer;
    toJSON(): string;
    toNumber(): number;
    toString(base?: number, len?: number): string;
    toTwos(width: number): BN;
    xor(bn: BN): BN;
    xorn(num: number): BN;
    ixor(bn: BN): BN;
    ixorn(num: number): BN;
    uxor(bn: BN): BN;
    uxorn(num: number): BN;
    zeroBits(): number;
}

export = BN;
