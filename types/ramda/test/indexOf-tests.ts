import * as R from 'ramda';

() => {
  R.indexOf(3, [1, 2, 3, 4]); // => 2
  R.indexOf(10)([1, 2, 3, 4]); // => -1
};
