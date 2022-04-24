import * as R from 'ramda';

() => {
    /**
     * Typescript implementation of union order is not guaranteed and can
     * change. Therefor using `||` here, which is a feature of $ExpectType
     */
    // $ExpectType ("c" | "a" | "b")[] || ("a" | "b" | "c")[]
    const objKeys = R.keys({ a: 1, b: 2, c: 3 });
    const numberKeys = R.keys(1); // $ExpectType string[]
    const arrayKeys = R.keys([]); // List of array members
    const stringKeys = R.keys('foo'); // $ExpectType string[]
};
