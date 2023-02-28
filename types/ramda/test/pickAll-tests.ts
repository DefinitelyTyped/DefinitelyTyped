import * as R from 'ramda';

() => {
    interface ABCD {
        a: number;
        b: number;
        c: number;
        d: number;
    }

    const obj: ABCD = { a: 1, b: 2, c: 3, d: 4 };

    // $ExpectType Pick<ABCD, "a" | "d">
    R.pickAll(['a', 'd'], obj); // => {a: 1, d: 4}
    // $ExpectType unknown
    R.pickAll(['a', 'd'])(obj); // => {a: 1, d: 4}
    // $ExpectType unknown
    R.pickAll(['a', 'e', 'f'], obj); // => {a: 1, e: undefined, f: undefined}
    // $ExpectType unknown
    R.pickAll(['a', 'e', 'f'])(obj); // => {a: 1, e: undefined, f: undefined}
};
