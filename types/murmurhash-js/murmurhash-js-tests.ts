import murmur = require('murmurhash-js');
import murmur2 = require('murmurhash-js/murmurhash2_gc');
import murmur3 = require('murmurhash-js/murmurhash3_gc');

let hash: number;

hash = murmur('string');
hash = murmur('string with seed', 1337);

hash = murmur.murmur2('string');
hash = murmur.murmur2('string with seed', 1337);

hash = murmur.murmur3('string');
hash = murmur.murmur3('string with seed', 1337);

hash = murmur2('string');
hash = murmur2('string with seed', 1337);

hash = murmur3('string');
hash = murmur3('string with seed', 1337);

