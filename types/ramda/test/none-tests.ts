import * as R from 'ramda';

() => {
  R.none(R.isNaN, [1, 2, 3]); // => true
  R.none(R.isNaN, [1, 2, 3, NaN]); // => false
  R.none(R.isNaN)([1, 2, 3, NaN]); // => false
};
