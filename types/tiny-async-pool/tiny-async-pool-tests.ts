import asyncPool = require('tiny-async-pool');

const expected = ['A', 'B', 'C'];

const getValues = async () => {
    const result: string[] = [];

    for await (const _ of asyncPool(5, ['a', 'b', 'c'], (value: string) =>
        Promise.resolve(result.push(value.toUpperCase())),
    )) {
        // do nothing
    }
    return result;
};

getValues().then(result => {
    if (result.length !== 3 || !result.every(r => expected.includes(r))) {
        throw new Error('Result is not equal to expected result!');
    }
});
