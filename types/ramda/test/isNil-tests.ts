import * as R from 'ramda';

() => {
    // $ExpectType true
    R.isNil(null);
    // $ExpectType true
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
