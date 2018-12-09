// Type definitions for bigi 1.4
// Project: https://github.com/cryptocoinjs/bigi#readme
// Definitions by: Mohamed Hegazy <https://github.com/mhegazy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export = bigi;

declare class bigi {
    constructor(a: any, b: any, c: any);
    abs(): any;
    add(a: bigi): bigi;
    addTo(a: bigi, r: number): void;
    am(i: any, x: any, w: any, j: any, c: any, n: any): any;
    and(a: bigi): bigi;
    andNot(a: any): any;
    bitCount(): any;
    bitLength(): any;
    bitwiseTo(a: any, op: any, r: any): void;
    byteLength(): any;
    byteValue(): any;
    changeBit(n: any, op: any): any;
    chunkSize(r: any): any;
    clamp(): void;
    clearBit(n: number): bigi;
    clone(): bigi;
    compareTo(a: bigi): number;
    copyTo(r: any): void;
    dAddOffset(n: any, w: any): void;
    dMultiply(n: number): void;
    divRemTo(m: any, q: any, r: any): void;
    divide(a: any): any;
    divideAndRemainder(a: bigi): bigi;
    dlShiftTo(n: bigi, r: number): void;
    drShiftTo(n: bigi, r: number): void;
    equals(a: bigi): boolean;
    exp(e: any, z: any): any;
    flipBit(n: number): bigi;
    fromInt(x: any): void;
    fromNumber(a: any, b: any, c: any): void;
    fromRadix(s: any, b: any): void;
    fromString(s: any, b: any): void;
    gcd(a: any): any;
    getLowestSetBit(): any;
    intValue(): number;
    invDigit(): any;
    isEven(): boolean;
    isProbablePrime(t: any): boolean;
    lShiftTo(n: any, r: any): void;
    max(a: any): any;
    millerRabin(t: bigi): bigi;
    min(a: bigi): bigi;
    mod(a: bigi): bigi;
    modInt(n: number): bigi;
    modInverse(m: number): bigi;
    modPow(e: any, m: any): any;
    modPowInt(e: any, m: any): any;
    multiply(a: bigi): bigi;
    multiplyLowerTo(a: bigi, n: any, r: any): void;
    multiplyTo(a: bigi, r: any): void;
    multiplyUpperTo(a: bigi, n: any, r: any): void;
    negate(): bigi;
    not(): bigi;
    or(a: bigi): bigi;
    pow(e: bigi): bigi;
    rShiftTo(n: bigi, r: any): void;
    remainder(a: bigi): bigi;
    setBit(n: number): bigi;
    shiftLeft(n: number): bigi;
    shiftRight(n: number): bigi;
    shortValue(): bigi;
    signum(): bigi;
    square(): bigi;
    squareTo(r: any): void;
    subTo(a: any, r: any): void;
    subtract(a: bigi): bigi;
    testBit(n: any): any;
    toBuffer(size: number): any;
    toByteArray(): any;
    toByteArrayUnsigned(): any;
    toDERInteger(): any;
    toHex(size?: number): string;
    toRadix(b: number): string;
    toString(b?: any): string;
    xor(a: any): any;
    static fromBuffer(buffer: any): bigi;
    static fromByteArrayUnsigned(byteArray?: any): number[];
    static fromDERInteger(byteArray?: any): number;
    static fromHex(hex: string): bigi;
    static isBigInteger(obj: any, check_ver: any): obj is bigi;
    static valueOf(i: any): bigi;
}
declare namespace bigi {
    interface Constants {
        readonly DB: number;
        readonly DM: number;
        readonly DV: number;
        readonly F1: number;
        readonly F2: number;
        readonly FV: number;
        readonly s: number;
        readonly t: number;
    }
    const ONE: bigi & Constants;
    const ZERO: bigi & Constants;
}
