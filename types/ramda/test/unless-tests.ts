import * as R from 'ramda';

() => {
    // coerceArray :: (a|[a]) -> [a]
    const coerceArray = R.unless<number | number[], number[], number[]>(R.is(Array), R.of);
    const a: number[] = coerceArray([1, 2, 3]); // => [1, 2, 3]
    const b: number[] = coerceArray(1); // => [1]

    // $ExpectType (a: number) => string | number
    const bodyTemperature = R.unless(
        (temperatureC: number) => R.clamp(36.5, 37.5, temperatureC) === temperatureC,
        t => `abnormal: ${t}`,
    );

    // $ExpectType string | number
    const normal = bodyTemperature(37); // => 37

    // $ExpectType string | number
    const abnormal = bodyTemperature(38); // => 'abnormal: 38'

    // $ExpectType (a: number | null) => string | null
    const StringifyIfNotNil = R.unless(
        (a: null | number): a is null => true,
        a => a.toString(0),
    );
};
