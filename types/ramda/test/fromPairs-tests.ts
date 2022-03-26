import * as R from 'ramda';

() => {
    // $ExpectType { [index: string]: number; }
    R.fromPairs([
        ['a', 1],
        ['b', 2],
        ['c', 3],
    ]); // => {a: 1, b: 2, c: 3}

    // $ExpectType { [index: string]: string; }
    R.fromPairs([
        [1, 'a'],
        [2, 'b'],
    ]); // => { '1': 'a', '2': 'b' }

    // $ExpectType { [index: string]: 2 | 3 | 1; }
    R.fromPairs([
        ['a', 1],
        ['b', 2],
        ['c', 3],
    ] as const); // => {a: 1, b: 2, c: 3}
};
