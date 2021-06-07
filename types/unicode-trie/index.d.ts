// Type definitions for unicode-trie 2.0
// Project: https://github.com/foliojs/unicode-trie
// Definitions by: esheppard <https://github.com/esheppard>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare class UnicodeTrie {
  constructor(data: Buffer | Uint8Array | { data: Uint32Array, highStart: number, errorValue: number });
  get(codePoint: number): number;
}

export = UnicodeTrie;
