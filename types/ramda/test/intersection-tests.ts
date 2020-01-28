import * as R from 'ramda';

() => {
  R.intersection([1, 2, 3], [2, 3, 3, 4]); // => [2, 3]
  R.intersection([1, 2, 3])([2, 3, 3, 4]); // => [2, 3]
};
