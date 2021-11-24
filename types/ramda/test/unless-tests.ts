import * as R from 'ramda';

() => {
  // coerceArray :: (a|[a]) -> [a]
  const coerceArray = R.unless(R.is(Array), R.of);
  const a: number[] = coerceArray([1, 2, 3]); // => [1, 2, 3]
  const b: number[] = coerceArray(1); // => [1]

  const addOneIfNotNil = R.unless(
    R.isNil,
    R.add(1)
  );

  const nil: undefined = addOneIfNotNil(undefined);
  const two: number = addOneIfNotNil(1);
};
