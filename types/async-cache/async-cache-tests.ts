import AsyncCache = require('async-cache');

const stats = new AsyncCache<number>({
    max: 1000,
    maxAge: 1000 * 60 * 10,
    load(key, cb) {
        key; // $ExpectType string
        cb; // $ExpectType (error: any, asyncValue: number, maxAge?: number | undefined) => void
    }
});
AsyncCache({
    load(key, cb) {}
});

stats.get('', (er, stat) => {
    er; // $ExpectType any
    stat; // $ExpectType number
});

stats.keys(); // $ExpectType string[]
stats.set('', 1); // $ExpectType boolean
stats.set('', 1, 1);
stats.reset();
stats.has(''); // $ExpectType boolean
stats.del('');
stats.peek(''); // $ExpectType number | undefined
