import UnicodeTrie from "./";
import UnicodeTrieBuilder from "./builder";

const data = { data: Uint32Array.from([0,0]), highStart: 0, errorValue: 0 };
const trie = new UnicodeTrie(data);

const builder = new UnicodeTrieBuilder(10, 666);

// $ExpectType number
const result = trie.get(0);

// $ExpectType UnicodeTrieBuilder
const resultOfBuilderSet = builder.set(0x4567, 99);

// $ExpectType number
const resultOfBuilderGet = builder.get(0x4566);
