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
    (value: number): T;
    (low: number, high: number): T;
    (text: string, radix?: number): T;

    // called as a constructor:
    new (value: number): T;
    new (low: number, high: number): T;
    new (text: string, radix?: number): T;

    prototype: T;
  }

export interface Uint64 extends Uint {}
export interface Uint32 extends Uint {}

export const UINT64: UintConstructor<Uint64>;
export const UINT32: UintConstructor<Uint32>;
