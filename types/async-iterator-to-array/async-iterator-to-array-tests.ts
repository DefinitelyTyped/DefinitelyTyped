import toArray = require('async-iterator-to-array');

async function * iterator(values: ReadonlyArray<number>) {
    for (const value of values) {
        yield `${value}`;
    }
}

toArray(iterator([1, 3, 3, 7]));  // $ExpectType Promise<string[]>
