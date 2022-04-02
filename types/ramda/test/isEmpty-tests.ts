import * as R from 'ramda';

() => {
    // $ExpectType false
    R.isEmpty([1, 2, 3]); // => false
    const l = [1, 2, 3];
    // $ExpectType boolean
    R.isEmpty(l); // => false
    // $ExpectType true
    R.isEmpty([]); // => true
    // $ExpectType true
    R.isEmpty(''); // => true
    // $ExpectType false
    R.isEmpty(null); // => false
    // $ExpectType true
    R.isEmpty(undefined); // => true
    // $ExpectType boolean
    R.isEmpty({}); // => true
    // $ExpectType boolean
    R.isEmpty({ a: 1 }); // => false
};
