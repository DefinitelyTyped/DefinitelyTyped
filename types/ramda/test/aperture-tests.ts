import * as R from 'ramda';

() => {
    // $ExpectType <T>(list: readonly T[]) => [] | [T, T][]
    const aperture2 = R.aperture(2);

    /// $ExpectType [] | [number, number][]
    const aperturedValue = R.aperture(2, [1, 2, 3, 4, 5]); // => [[1, 2], [2, 3], [3, 4], [4, 5]]
    R.aperture(3, [1, 2, 3, 4, 5]); // => [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
    R.aperture(7, [1, 2, 3, 4, 5]); // => []
    R.aperture(7)([1, 2, 3, 4, 5]); // => []

    const res1: Array<[number, number]> = R.aperture(2, [1, 2, 3, 4, 5]);
    const res2: number[][] = R.aperture(11, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);

    const anyArr: any[] = [1, '2'];
    // $ExpectType [] | [any, any][]
    const aperturedAny = R.aperture(2, anyArr);

    const undefArr: undefined[] = [undefined, undefined, undefined];
    // $ExpectType [] | [undefined, undefined, undefined][]
    const aperturedUndefined = R.aperture(3, undefArr);
};
