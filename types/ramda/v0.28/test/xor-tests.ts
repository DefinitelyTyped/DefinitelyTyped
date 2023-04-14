import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.xor(true, true);

    // $ExpectType boolean
    R.xor(true, false);

    // $ExpectType boolean
    R.xor(false, true);

    // $ExpectType boolean
    R.xor(false, false);

    // $ExpectType boolean
    R.xor(0, false);

    // $ExpectType boolean
    R.xor(false, 0);

    // $ExpectType boolean
    R.xor(0, 0);

    // $ExpectType boolean
    R.xor('foo', 0);

    // $ExpectType boolean
    R.xor({}, 0);

    // $ExpectType boolean
    R.xor([], 0);

    // $ExpectType boolean
    R.xor('', 0);

    // $ExpectType boolean
    R.xor(NaN, 0);

    // $ExpectType boolean
    R.xor(null, 0);

    // $ExpectType boolean
    R.xor(undefined, 0);
};

() => {
    // $ExpectType (b: any) => boolean
    R.xor(true);

    // $ExpectType (b: any) => boolean
    R.xor('foo');
};

() => {
    // $ExpectType boolean
    R.xor(true)(true);

    // $ExpectType boolean
    R.xor(true)(false);

    // $ExpectType boolean
    R.xor(false)(true);

    // $ExpectType boolean
    R.xor(false)(false);

    // $ExpectType boolean
    R.xor(0)(false);

    // $ExpectType boolean
    R.xor(false)(0);

    // $ExpectType boolean
    R.xor(0)(0);

    // $ExpectType boolean
    R.xor('foo')(0);

    // $ExpectType boolean
    R.xor({})(0);

    // $ExpectType boolean
    R.xor([])(0);

    // $ExpectType boolean
    R.xor('')(0);

    // $ExpectType boolean
    R.xor(NaN)(0);

    // $ExpectType boolean
    R.xor(null)(0);

    // $ExpectType boolean
    R.xor(undefined)(0);
};
