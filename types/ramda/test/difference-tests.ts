import * as R from 'ramda';

() => {
  R.difference([1, 2, 3, 4], [7, 6, 5, 4, 3]); // => [1,2]
  R.difference([7, 6, 5, 4, 3], [1, 2, 3, 4]); // => [7,6,5]
};
