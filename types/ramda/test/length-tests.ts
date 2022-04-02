import * as R from 'ramda';

() => {
    // $ExpectType 0
    R.length([]); // => 0
    // $ExpectType 3
    R.length([1, 2, 3]); // => 3
    const l = [1, 2, 3];
    // $ExpectType number
    R.length(l); // => 3

    // $ExpectType number
    R.length('test'); // => 4

    // $ExpectError
    R.length();

    // $ExpectError
    R.length({});
};
