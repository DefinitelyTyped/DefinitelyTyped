import pLimit = require('p-limit');

const limit = pLimit(1);

const input = [
    limit(() => Promise.resolve('foo')),
    limit(() => Promise.resolve('bar')),
    limit(() => Promise.resolve(undefined)),
];

Promise.all(input); // $ExpectType Promise<(string | undefined)[]>

limit((a: string) => '', 'test').then(v => {
    v; // $ExpectType string
});
limit((a: string, b: number) => Promise.resolve(''), 'test', 1).then(v => {
    v; // $ExpectType string
});

limit.activeCount; // $ExpectType number
limit.activeCount = 1; // $ExpectError
limit.pendingCount; // $ExpectType number
limit.pendingCount = 1; // $ExpectError
