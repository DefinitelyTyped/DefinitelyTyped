import pLimit = require('p-limit');

const limit = pLimit(1);

const input = [
    limit(() => Promise.resolve('foo')),
    limit(() => Promise.resolve('bar')),
    limit(() => Promise.resolve(undefined)),
];

Promise.all(input).then(result => {
    const str: string | undefined = result[0];
});
