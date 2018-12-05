import pAll = require('p-all');

const actions: [() => Promise<string>, () => Promise<string>, () => Promise<void>, () => Promise<number>] = [
    () => Promise.resolve('sindresorhus.com'),
    () => Promise.resolve('ava.li'),
    () => Promise.resolve(),
    () => Promise.resolve(1)
];

pAll(actions, {concurrency: 2}).then(result => {
    const str: string = result[0];
    const str2: string = result[1];
    const num: number = result[3];
});
