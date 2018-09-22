// Type definitions for minimal-bit-array 1.0
// Project: https://github.com/mikolalysenko/minimal-bit-array
// Definitions by: Olegs Jeremejevs <https://github.com/jeremejevs>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace BitArray {
  interface BitArrayJSON {
    bits: number[];
    length: number;
  }
}

declare class BitArray {
  static fromJSON(bitArrayJSON: BitArray.BitArrayJSON): BitArray;

  length: number;
  bits: Uint32Array;

  constructor(length: number);

  get(index: number): boolean;
  set(index: number, value: any): boolean;
  toJSON(): BitArray.BitArrayJSON;
}

export = BitArray;
