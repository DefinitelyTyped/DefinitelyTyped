import * as R from 'ramda';

() => {
  R.range(1, 5); // => [1, 2, 3, 4]
  R.range(50)(53); // => [50, 51, 52]
};
