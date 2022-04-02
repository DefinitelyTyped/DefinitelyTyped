import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.none(Number.isNaN, [1, 2, 3]); // => true
    // $ExpectType boolean
    R.none(Number.isNaN, [1, 2, 3, NaN]); // => false
    // $ExpectType boolean
    R.none(Number.isNaN)([1, 2, 3, NaN]); // => false
    // $ExpectError
    R.none((n: number) => Number.isNaN(n), ['1', '2', '3']); // => true
};
