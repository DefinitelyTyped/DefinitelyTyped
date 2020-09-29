import * as R from 'ramda';

() => {
  R.startsWith('a', 'abc'); // => true
  R.startsWith('a')('abc'); // => true
  R.startsWith(1, [1, 2, 3]); // => true
  R.startsWith(1)([1, 2, 3]); // => true
  R.startsWith([1], [1, 2, 3]); // => true
  R.startsWith([1])([1, 2, 3]); // => true
};
