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

    /**
     * Typescript implementation of union order is not guaranteed and can
     * change. Therefor using `||` here, which is a feature of $ExpectType
     */
    // $ExpectType { [index: string]: 2 | 3 | 1; } || { [index: string]: 2 | 1 | 3; }
    R.fromPairs([
        ['a', 1],
        ['b', 2],
        ['c', 3],
    ] as const); // => {a: 1, b: 2, c: 3}
};
