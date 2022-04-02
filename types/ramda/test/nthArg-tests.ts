import * as R from 'ramda';

() => {
    // $ExpectType string
    R.nthArg(1)('a', 'b', 'c'); // => 'b'
    // $ExpectType string
    R.nthArg(-1)('a', 'b', 'c'); // => 'c'
    // $ExpectType string | number
    R.nthArg(-1)('a', 'b', 3); // => 'c'
    // $ExpectType string
    R.nthArg<1>(1)('a', 'b', 'c'); // => 'b'
    // $ExpectType number
    R.nthArg<1>(1)('a', 1, 'c'); // => 'b'
};
