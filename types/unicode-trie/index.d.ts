// Type definitions for unicode-trie 2.0.0
/// <reference types="node" />
/// <reference path="./builder.d.ts" />
/// <reference path="./swap.d.ts" />

declare class UnicodeTrie {
  constructor(data: Buffer | Uint8Array | { data: Uint32Array, highStart: number, errorValue: number });
  get(codePoint: number): number;
}

export = UnicodeTrie;
