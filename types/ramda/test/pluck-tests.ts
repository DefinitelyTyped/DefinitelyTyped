import * as R from 'ramda';

() => {
    // $ExpectType number[]
    R.pluck('a')([{ a: 1 }, { a: 2 }]); // => [1, 2]
    // $ExpectType number[]
    R.pluck(0)([[1, 2], [3, 4]]); // => [1, 3]
    // TODO: more tests
};
