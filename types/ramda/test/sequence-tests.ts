import * as R from 'ramda';

() => {
  // $ExpectType number[][]
  R.sequence(R.of, [[1], [2], [3]]); // => [[1, 2, 3]]
  // $ExpectType number[][]
  R.sequence(R.of)([[1], [2], [3]]); // => [[1, 2, 3]]
};
