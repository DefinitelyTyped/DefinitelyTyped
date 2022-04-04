import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.xor(true, true);
    // $ExpectType boolean
    R.xor(true, false);
    // $ExpectType boolean
    R.xor(false, false);
    // $ExpectError
    R.xor(0, false);
    // $ExpectType (b: boolean) => boolean
    R.xor(true);
    // $ExpectError
    R.xor('foo');
    // $ExpectType boolean
    R.xor(true)(true);
    // $ExpectType boolean
    R.xor(true)(false);
    // $ExpectType boolean
    R.xor(false)(false);
    // $ExpectError
    R.xor(0)(false);
    // $ExpectError
    R.xor(0)(0);
};
