import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.isNil(null);
    // $ExpectType boolean
    R.isNil(undefined);
    const l = [1, 2, 3];
    // $ExpectType boolean
    R.isNil(1); // => false
    // $ExpectType boolean
    R.isNil([]); // => false
    // $ExpectType boolean
    R.isNil(''); // => false
    // $ExpectType boolean
    R.isNil({}); // => false
    // $ExpectType boolean
    R.isNil({ a: 1 }); // => false
};
