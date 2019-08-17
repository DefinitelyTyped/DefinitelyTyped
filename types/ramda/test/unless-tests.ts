import * as R from 'ramda';

() => {
  // coerceArray :: (a|[a]) -> [a]
  const coerceArray = R.unless(R.isArrayLike, R.of);
  const a: number[] = coerceArray([1, 2, 3]); // => [1, 2, 3]
  const b: number[] = coerceArray(1); // => [1]
};
