import * as R from 'ramda';

() => {
    // $ExpectType [number, string][]
    R.xprod([1, 2], ['a', 'b']); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
    // $ExpectType [number, string][]
    R.xprod([1, 2])(['a', 'b']); // => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
};
