import UnicodeTrie = require("unicode-trie");

const data = { data: Uint32Array.from([0,0]), highStart: 0, errorValue: 0 };
const trie = new UnicodeTrie(data);

// $ExpectType number
const result = trie.get(0);
