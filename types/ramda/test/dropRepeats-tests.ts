import * as R from 'ramda';

() => {
  R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); // => [1, 2, 3, 4, 2]
};
