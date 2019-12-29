import * as R from 'ramda';

() => {
  R.concat([], []); // => []
  R.concat([4, 5, 6], [1, 2, 3]); // => [4, 5, 6, 1, 2, 3]
  R.concat([4, 5, 6])([1, 2, 3]); // => [4, 5, 6, 1, 2, 3]
  R.concat('ABC')('DEF'); // 'ABCDEF'
};
