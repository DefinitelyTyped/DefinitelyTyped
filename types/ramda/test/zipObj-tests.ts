import * as R from "ramda";

(() => {
    /**
     * Typescript implementation of union order is not guaranteed and can
     * change. Therefor using `||` here, which is a feature of $ExpectType
     */
    // $ExpectType {a: 1, b: 2, c: 3}
    R.zipObj(["a", "b", "c"], [1, 2, 3]); // => {a: 1, b: 2, c: 3}

    // $ExpectType {a: 1, b: 2, c: 3}
    R.zipObj(["a", "b", "c"])([1, 2, 3]); // => {a: 1, b: 2, c: 3}

    // $ExpectType {1: 'a', 2: 'b', 3: 'c'}
    R.zipObj([1, 2, 3], ["a", "b", "c"]); // => {1: 'a', 2: 'b', 3: 'c'}

    // $ExpectType {1: 'a', 2: 'b', 3: 'c'}
    R.zipObj([1, 2, 3])(["a", "b", "c"]); // => {1: 'a', 2: 'b', 3: 'c'}
});
