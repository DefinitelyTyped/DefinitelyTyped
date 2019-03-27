// Type definitions for cuint 0.2
// Project: https://github.com/pierrec/js-cuint
// Definitions by:  Lukas Tetzlaff <https://github.com/ltetzlaff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type UIntFactory<T extends UInt> = (
    ...numbers: Array<number | string>
) => T;

export const UINT64: UIntFactory<UInt64>;
export const UINT32: UIntFactory<UInt32>;

export class UInt {
    protected constructor()

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

export class UInt64 extends UInt {}
export class UInt32 extends UInt {}
