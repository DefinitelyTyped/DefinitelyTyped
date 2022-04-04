import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.isEmpty([1, 2, 3]); // => false
    const l = [1, 2, 3];
    // $ExpectType boolean
    R.isEmpty(l); // => false
    // $ExpectType boolean
    R.isEmpty([]); // => true
    // $ExpectType boolean
    R.isEmpty(''); // => true
    // $ExpectType boolean
    R.isEmpty(null); // => false
    // $ExpectType boolean
    R.isEmpty(undefined); // => true
    // $ExpectType boolean
    R.isEmpty({}); // => true
    // $ExpectType boolean
    R.isEmpty({ a: 1 }); // => false
};
