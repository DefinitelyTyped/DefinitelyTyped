import * as R from "ramda";

(() => {
    /**
     * Typescript implementation of union order is not guaranteed and can
     * change. Therefor using `||` here, which is a feature of $ExpectType
     */
    // $ExpectType ("c" | "a" | "b")[] || ("a" | "b" | "c")[]
    const objKeys = R.keys({ a: 1, b: 2, c: 3 });
});
