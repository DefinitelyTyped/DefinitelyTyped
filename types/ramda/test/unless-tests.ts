import * as R from 'ramda';

() => {
    // coerceArray :: (a|[a]) -> [a]
    const coerceArray = R.unless(R.is(Array), R.of);
    // $ExpectType number[]
    coerceArray([1, 2, 3]); // => [1, 2, 3]
    // $ExpectType number[]
    coerceArray(1); // => [1]

    // $ExpectType (a: number) => string | number
    const bodyTemperature = R.unless<number, string>(
        temperatureC => R.clamp(36.5, 37.5, temperatureC) === temperatureC,
        t => `abnormal: ${t}`,
    );

    // $ExpectType string | number
    bodyTemperature(37); // => 37

    // $ExpectType string | number
    bodyTemperature(38); // => 'abnormal: 38'
};
