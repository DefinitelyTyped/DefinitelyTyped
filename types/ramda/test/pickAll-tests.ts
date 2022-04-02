import * as R from 'ramda';

() => {
    // $ExpectType 1
    R.pickAll(['a', 'd'], { a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, d: 4}
    // $ExpectType 1
    R.pickAll(['a', 'd'])({ a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, d: 4}
    // $ExpectType 1
    R.pickAll(['a', 'e', 'f'], { a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, e: undefined, f: undefined}
    // $ExpectType 1
    R.pickAll(['a', 'e', 'f'])({ a: 1, b: 2, c: 3, d: 4 }); // => {a: 1, e: undefined, f: undefined}
};
