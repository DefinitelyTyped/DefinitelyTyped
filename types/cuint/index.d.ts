// Type definitions for cuint 0.2
// Project: https://github.com/pierrec/js-cuint
// Definitions by:  Lukas Tetzlaff <https://github.com/ltetzlaff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Uint {
    clone(): this;
    add(x: this): this;
    subtract(x: this): this;
    multiply(x: this): this;
    xor(x: this): this;
    rotl(n: number): this;
    shiftRight(n: number): this;

    fromNumber(n: number): this;
    fromBits(...bits: number[]): this;

    _low: number;
    _high: number;

    toString(base?: number): string;
}

export interface UintConstructor<T extends Uint> {
    // called as a function:
    (low: number, high?: number): T;
    // tslint:disable-next-line:unified-signatures
    (text: string, radix?: number): T;

    // called as a constructor:
    new (low: number, high?: number): T;
    // tslint:disable-next-line:unified-signatures
    new (text: string, radix?: number): T;

    prototype: T;
}

export interface Uint64Constructor<T extends Uint> extends UintConstructor<T> {
    // called as a function:
    (a00: number, a16: number, a32: number, a48: number): T;

    // called as constructor:
    new (a00: number, a16: number, a32: number, a48: number): T;
}

export const UINT64: Uint64Constructor<Uint>;
export const UINT32: UintConstructor<Uint>;
