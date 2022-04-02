import * as R from 'ramda';

() => {
    // $ExpectType [number[]]
    R.of([1]); // => [[1]]
    // $ExpectType [number]
    R.of(1);
};
