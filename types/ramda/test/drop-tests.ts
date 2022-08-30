import * as R from 'ramda';

() => {
    R.drop(3, [1, 2, 3, 4, 5, 6, 7]); // => [4,5,6,7]
    R.drop(3)([1, 2, 3, 4, 5, 6, 7]); // => [4,5,6,7]
    R.drop(3, 'ramda'); // => 'ram'
    R.drop(3)('ramda'); // => 'ram'
};
