export interface Uint {
    // Math
    add(x: this): this;
    subtract(x: this): this;
    multiply(x: this): this;
    div(x: this): this;

    // Compare
    equals(x: this): boolean;
    eq(x: this): boolean;
    greaterThan(x: this): boolean;
    gt(x: this): boolean;
    lessThan(x: this): boolean;
    lt(x: this): boolean;

    // Bitwise
    negate(): this;
    or(x: this): this;
    and(x: this): this;
    xor(x: this): this;
    not(x: this): this;
    shiftRight(n: number): this;
    shiftr(n: number): this;
    shiftLeft(n: number): this;
    shiftl(n: number): this;
    rorateLeft(n: number): this;
    rotl(n: number): this;
    rorateRight(n: number): this;
    rotr(n: number): this;

    // Deserialize
    fromNumber(n: number): this;
    fromBits(...bits: number[]): this;
    fromString(integer: string, radix?: number): this;

    // Serialize
    toNumber(): number;
    toString(base?: number): string;
    clone(): this;

    _low: number;
    _high: number;
}

export interface UintConstructor<T extends Uint> {
    // called as a function:
    (low: number, high?: number): T;
    // tslint:disable-next-line:unified-signatures
    (text: string, radix?: number): T;

    // called as a constructor:
    new(low: number, high?: number): T;
    // tslint:disable-next-line:unified-signatures
    new(text: string, radix?: number): T;

    prototype: T;
}

export interface Uint64Constructor<T extends Uint> extends UintConstructor<T> {
    // called as a function:
    (a00: number, a16: number, a32: number, a48: number): T;

    // called as constructor:
    new(a00: number, a16: number, a32: number, a48: number): T;
}

export const UINT64: Uint64Constructor<Uint>;
export const UINT32: UintConstructor<Uint>;
