import * as R from 'ramda';

() => {
  const nums = [1, 2, 3, -99, 42, 6, 7];
  R.apply(Math.max, nums); // => 42
  R.apply(Math.max)(nums); // => 42
};
