import * as R from 'ramda';

() => {
    /**
     * Typescript implementation of union order is not guaranteed and can
     * change. Therefor using `||` here, which is a feature of $ExpectType
     */
    // $ExpectType Record<"a" | "b" | "c", number>
    R.zipObj(['a', 'b', 'c'], [1, 2, 3]); // => {a: 1, b: 2, c: 3}
    // $ExpectType Record<"a" | "b" | "c", number>
    R.zipObj(['a', 'b', 'c'])([1, 2, 3]); // => {a: 1, b: 2, c: 3}
    // $ExpectType Record<2 | 1 | 3, string> || Record<3 | 1 | 2, string> || Record<2 | 3 | 1, string>
    R.zipObj([1, 2, 3], ['a', 'b', 'c']); // => {1: 'a', 2: 'b', 3: 'c'}
    // $ExpectType Record<2 | 1 | 3, string> || Record<3 | 1 | 2, string> || Record<2 | 3 | 1, string>
    R.zipObj([1, 2, 3])(['a', 'b', 'c']); // => {1: 'a', 2: 'b', 3: 'c'}
};
