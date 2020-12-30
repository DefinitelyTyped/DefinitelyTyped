var HashTable = require('@ronomon/hash-table');

var keySize = 16;
var valueSize = 4;
var elementsMin = 1024; // Optional. Reserve space for at least 1,024 elements.
var elementsMax = 65536; // Optional. Expect at most 65,536 elements.

var hashTable = new HashTable(keySize, valueSize, elementsMin, elementsMax);

// set():
var key = Buffer.alloc(keySize);
var keyOffset = 0;
var value = Buffer.alloc(valueSize);
var valueOffset = 0;
var result = hashTable.set(key, keyOffset, value, valueOffset);
if (result === 0) console.log('set(): element was inserted');
if (result === 1) console.log('set(): element was updated');

// get():
var result = hashTable.get(key, keyOffset, value, valueOffset);
if (result === 0) console.log('get(): element does not exist, nothing copied');
if (result === 1) console.log('get(): element exists, copied value to buffer');

// exist():
var result = hashTable.exist(key, keyOffset);
if (result === 0) console.log('exist(): element does not exist');
if (result === 1) console.log('exist(): element exists');

// unset():
var result = hashTable.unset(key, keyOffset);
if (result === 0) console.log('unset(): element does not exist, not removed');
if (result === 1) console.log('unset(): element was removed');

// cache():
// cache() cannot be used on the same instance as set(), reinstantiate:
var hashTable = new HashTable(keySize, valueSize, elementsMin, elementsMax);
var result = hashTable.cache(key, keyOffset, value, valueOffset);
if (result === 0) console.log('cache(): element was inserted');
if (result === 1) console.log('cache(): element was updated');
if (result === 2) console.log('cache(): element evicted another element');
