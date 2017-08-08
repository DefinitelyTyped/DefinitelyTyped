import pAll = require('p-all');

const actions: [() => Promise<string>, () => Promise<string>, () => Promise<void>, () => Promise<number>] = [
    () => Promise.resolve('sindresorhus.com'),
    () => Promise.resolve('ava.li'),
    () => Promise.resolve(),
    () => Promise.resolve(1)
];

pAll(actions, {concurrency: 2}).then(result => {
    let str: string = result[0];
    let str2: string = result[1];
    let num: number = result[3];
});
