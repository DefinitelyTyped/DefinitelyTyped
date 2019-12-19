import DexieBatch = require('dexie-batch');
import Dexie from 'dexie';

const db = new Dexie('MyDatabase');
const collection = db.table<string, number>('table').toCollection();

new DexieBatch({ batchSize: 10, limit: 10 }).each(collection, (item, index) => {
    item; // $ExpectType string
    index; // $ExpectType number
});

new DexieBatch({ batchSize: 10 }).eachBatch(collection, (items, index) => {
    items; // $ExpectType string[]
    index; // $ExpectType number
});

new DexieBatch({ batchSize: 10 }).eachBatchParallel(collection, (items, index) => {
    items; // $ExpectType string[]
    index; // $ExpectType number
});

new DexieBatch({ batchSize: 10 }).eachBatchSerial(collection, (items, index) => {
    items; // $ExpectType string[]
    index; // $ExpectType number
});

new DexieBatch({ batchSize: 10 }).isParallel(); // $ExpectType boolean
