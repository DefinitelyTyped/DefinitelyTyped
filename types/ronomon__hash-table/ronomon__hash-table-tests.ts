import HashTable = require("@ronomon/hash-table");

const keySize = 16;
const valueSize = 4;
const elementsMin = 1024; // Optional. Reserve space for at least 1,024 elements.
const elementsMax = 65536; // Optional. Expect at most 65,536 elements.

let hashTable = new HashTable(keySize, valueSize, elementsMin, elementsMax);

// set():
const key = Buffer.alloc(keySize);
const keyOffset = 0;
const value = Buffer.alloc(valueSize);
const valueOffset = 0;
let result = hashTable.set(key, keyOffset, value, valueOffset);
if (result === 0) console.log("set(): element was inserted");
if (result === 1) console.log("set(): element was updated");

// get():
result = hashTable.get(key, keyOffset, value, valueOffset);
if (result === 0) console.log("get(): element does not exist, nothing copied");
if (result === 1) console.log("get(): element exists, copied value to buffer");

// exist():
result = hashTable.exist(key, keyOffset);
if (result === 0) console.log("exist(): element does not exist");
if (result === 1) console.log("exist(): element exists");

// unset():
result = hashTable.unset(key, keyOffset);
if (result === 0) console.log("unset(): element does not exist, not removed");
if (result === 1) console.log("unset(): element was removed");

// cache():
// cache() cannot be used on the same instance as set(), reinstantiate:
hashTable = new HashTable(keySize, valueSize, elementsMin, elementsMax);
result = hashTable.cache(key, keyOffset, value, valueOffset);
if (result === 0) console.log("cache(): element was inserted");
if (result === 1) console.log("cache(): element was updated");
if (result === 2) console.log("cache(): element evicted another element");
