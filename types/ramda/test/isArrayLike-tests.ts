import * as R from 'ramda';

() => {
  let x: boolean;
  x = R.isArrayLike('a');
  x = R.isArrayLike([1, 2, 3]);
  x = R.isArrayLike([]);
};
