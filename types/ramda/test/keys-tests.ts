import * as R from 'ramda';

() => {
    /**
     * Typescript implementation of union order is not guaranteed and can
     * change. Therefor using `||` here, which is a feature of $ExpectType
     */
    // $ExpectType ("c" | "a" | "b")[] || ("a" | "b" | "c")[]
    R.keys({ a: 1, b: 2, c: 3 });
    // $ExpectError
    R.keys(1);
    // $ExpectType (keyof never[])[] || (number | keyof never[])[]
    R.keys([]); // List of array members
    // $ExpectError
    R.keys('foo');
};
