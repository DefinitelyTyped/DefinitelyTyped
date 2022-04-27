import * as R from 'ramda';

() => {
    // $ExpectType number
    R.length([]); // => 0
    // $ExpectType number
    R.length([1, 2, 3]); // => 3

    // $ExpectType number
    R.length('test'); // => 4

    // $ExpectError
    R.length();

    // $ExpectError
    R.length({});
};
