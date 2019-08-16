import * as R from 'ramda';

() => {
  R.lastIndexOf(3, [-1, 3, 3, 0, 1, 2, 3, 4]); // => 6
  R.lastIndexOf(10, [1, 2, 3, 4]); // => -1
};
