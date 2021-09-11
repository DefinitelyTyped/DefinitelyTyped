import UnicodeTrie = require("unicode-trie");
import UnicodeTrieBuilder = require('unicode-trie/builder');

const data = { data: Uint32Array.from([0, 0]), highStart: 0, errorValue: 0 };
const trie = new UnicodeTrie(data);

// $ExpectType number
const result = trie.get(0);

const builder = new UnicodeTrieBuilder(0, -1);
builder.set(100, 1);
builder.setRange(200, 300, 2);

// $ExpectType number
const builderGetResult = builder.get(100);

const builderTrie = builder.freeze();
