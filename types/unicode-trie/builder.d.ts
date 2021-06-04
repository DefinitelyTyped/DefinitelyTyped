import UnicodeTrie = require("./");

declare class UnicodeTrieBuilder {
  constructor(initialValue: number, errorValue: number);
  set(codePoint: number, value: number): UnicodeTrieBuilder;
  setRange(start: number, end: number, value: number, overwrite?: boolean): UnicodeTrieBuilder;
  get(codePoint: number, fromLSCP?: boolean): number;
  freeze(): UnicodeTrie;
  toBuffer(): Buffer;
}

export = UnicodeTrieBuilder;
