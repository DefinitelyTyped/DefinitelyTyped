import * as R from 'ramda';

() => {
    R.none(Number.isNaN, [1, 2, 3]); // => true
    R.none(Number.isNaN, [1, 2, 3, NaN]); // => false
    R.none(Number.isNaN)([1, 2, 3, NaN]); // => false
};
