import * as bech32 from 'bech32';

// Test decode
const testString = 'abcdef1qpzry9x8gf2tvdw0s3jn54khce6mua7lmqqqxw';
const decoded = bech32.decode(testString);
// Test decode with limit
bech32.decode(testString, testString.length);
decoded.prefix;
decoded.words;

// Test convert from/to words
const words: number[] = bech32.toWords(Buffer.from('foobar', 'utf8'));
bech32.fromWords(words);

// Test encode
const testPrefix = 'foo';
bech32.encode(testPrefix, words);
// Test encode with limit
bech32.encode(testPrefix, words, testPrefix.length + 7 + words.length);
