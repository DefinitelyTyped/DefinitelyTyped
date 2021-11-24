import * as R from 'ramda';

() => {
  // coerceArray :: (a|[a]) -> [a]
  const coerceArray = R.unless(R.is(Array), R.of);
  const a: number[] = coerceArray([1, 2, 3]); // => [1, 2, 3]
  const b: number[] = coerceArray(1); // => [1]

  const bodyTemperature = R.unless<number, string>(
    R.chain(R.equals, R.clamp(36.5, 37.5)),
    t => `abnormal: ${t}`
  );

  const normal = bodyTemperature(37);   //=> 37
  const abnormal = bodyTemperature(38); //=> 'abnormal: 38'
};
