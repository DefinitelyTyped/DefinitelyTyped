import * as R from 'ramda';

() => {
  const a: number = R.median([7, 2, 10, 9]); // => 8
  const b: number = R.median([]); // => NaN
};
