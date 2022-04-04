import * as R from 'ramda';

() => {
    // $ExpectType Pick<{ a: number; b: number; c: number; d: number; }, "a" | "d">
    R.pickAll(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, d: 4}
    // $ExpectType Pick<{ a: number; b: number; c: number; d: number; }, "a" | "d">
    R.pickAll(['a', 'd'])({ a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, d: 4}
    // $ExpectError
    R.pickAll(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, e: undefined, f: undefined}
    // $ExpectError
    R.pickAll(['a', 'e', 'f'])({ a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, e: undefined, f: undefined}
};
