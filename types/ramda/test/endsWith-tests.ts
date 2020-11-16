import * as R from 'ramda';

() => {
  R.endsWith('c', 'abc'); // => true
  R.endsWith('c')('abc'); // => true
  R.endsWith(3, [1, 2, 3]); // => true
  R.endsWith(3)([1, 2, 3]); // => true
  R.endsWith([3], [1, 2, 3]); // => true
  R.endsWith([3])([1, 2, 3]); // => true
};
