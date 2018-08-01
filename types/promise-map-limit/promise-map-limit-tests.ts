import mapPromiseLimit = require('promise-map-limit');

const promisedStrings = mapPromiseLimit(['foo', 'bar'], 2, s => s);
promisedStrings; // $ExpectType Promise<string[]>

const promisedBooleans = mapPromiseLimit([true, false], 2, b => b);
promisedBooleans; // $ExpectType Promise<boolean[]>

const promiseOfPromisedNumbers = mapPromiseLimit(
    [{ foo: 1 }, { foo: 2 }],
    2,
    value => Promise.resolve(value.foo),
);
promiseOfPromisedNumbers; // $ExpectType Promise<number[]>

const promiseNumber = (value: Record<string, number>): Promise<number> =>
    new Promise((resolve, reject) => { resolve(value.foo); });

(async () => {
    const asyncNumbers = await mapPromiseLimit(
        [{ foo: 1 }, { foo: 2 }],
        2,
        async value => promiseNumber(value),
    );
    asyncNumbers; // $ExpectType number[]
})();
