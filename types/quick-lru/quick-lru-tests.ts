import QuickLRU = require('quick-lru');

let num: number;
let numu: number | undefined;
let str: string;
let bool: boolean;

const lru = new QuickLRU<string, number>({maxSize: 1000});

lru.set('🦄', 1).set('🌈', 2);
numu = lru.get('🦄');
bool = lru.has('🦄');
numu = lru.peek('🦄');
lru.delete('🦄');
lru.clear();
num = lru.size;

for (const [key, value] of lru) {
    str = key;
    num = value;
}

for (const key of lru.keys()) {
    str = key;
}

for (const value of lru.values()) {
    num = value;
}
