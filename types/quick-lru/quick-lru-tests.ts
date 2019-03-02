import QuickLRU = require('quick-lru');

const lru = new QuickLRU<string, number>({ maxSize: 1000 });
new QuickLRU<string, number>(); // $ExpectError

lru.set('🦄', 1).set('🌈', 2); // $ExpectType QuickLRU<string, number>
lru.get('🦄'); // $ExpectType number | undefined
lru.has('🦄'); // $ExpectType boolean
lru.peek('🦄'); // $ExpectType number | undefined
lru.delete('🦄'); // $ExpectType boolean
lru.clear(); // $ExpectType void
lru.size; // $ExpectType number

for (const [key, value] of lru) {
    key; // $ExpectType string
    value; // $ExpectType number
}

for (const key of lru.keys()) {
    key; // $ExpectType string
}

for (const value of lru.values()) {
    value; // $ExpectType number
}
