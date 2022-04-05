import * as R from 'ramda';

() => {
    // $ExpectType number[]
    R.uniq([1, 1, 2, 1]); // => [1, 2]
    // $ExpectType {}[]
    R.uniq([{}, {}]); // => [{}, {}]
    // $ExpectType (string | number)[]
    R.uniq([1, '1']); // => [1, '1']
};
