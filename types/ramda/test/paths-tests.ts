import * as R from 'ramda';

() => {
    R.paths(
        [
            ['a', 'b'],
            ['p', 0, 'q'],
        ],
        { a: { b: 2 }, p: [{ q: 3 }] },
    ); // => [2, 3]
    R.paths([
        ['a', 'b'],
        ['p', 0, 'q'],
    ])({ a: { b: 2 }, p: [{ q: 3 }] }); // => [2, 3]

    R.paths(
        [
            ['a', 'b'],
            ['p', 'r'],
        ],
        { a: { b: 2 }, p: [{ q: 3 }] },
    ); // => [2, undefined]
    R.paths([
        ['a', 'b'],
        ['p', 'r'],
    ])({ a: { b: 2 }, p: [{ q: 3 }] }); // => [2, undefined]

    R.paths([['thisKeyIsNotThere']], {}); // => [undefined]
    R.paths([['thisKeyIsNotThere']])({}); // => [undefined]
};
