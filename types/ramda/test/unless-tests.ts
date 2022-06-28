import * as R from 'ramda';

() => {
    // coerceArray :: (a|[a]) -> [a]
    const coerceArray = R.unless(R.is(Array), R.of);
    const a: number[] = coerceArray([1, 2, 3]); // => [1, 2, 3]
    const b: number[] = coerceArray(1); // => [1]

    // $ExpectType (a: number) => string | number
    const bodyTemperature = R.unless<number, string>(
        temperatureC => R.clamp(36.5, 37.5, temperatureC) === temperatureC,
        t => `abnormal: ${t}`,
    );

    // $ExpectType string | number
    const normal = bodyTemperature(37); // => 37

    // $ExpectType string | number
    const abnormal = bodyTemperature(38); // => 'abnormal: 38'
};
