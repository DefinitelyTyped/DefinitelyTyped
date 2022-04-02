import * as R from 'ramda';

() => {
    // $ExpectType true
    R.or(true, true); // => true
    // $ExpectType true
    R.or(true, false); // => true
    // $ExpectType true
    R.or(false, true); // => true
    // $ExpectType false
    R.or(false, false); // => false
    // $ExpectType true
    R.or(true)(true); // => true
    // $ExpectType true
    R.or(true)(false); // => true
    // $ExpectType true
    R.or(false)(true); // => true
    // $ExpectType false
    R.or(false)(false); // => false
    // $ExpectType never[]
    R.or(0, []); // => []
    // $ExpectType never[]
    R.or(0)([]); // => []
    // $ExpectType ""
    R.or(null, ''); // => ''
    // $ExpectType ""
    R.or(null)(''); // => ''
    let s = '';
    let n = 0;
    // $ExpectType string | number
    R.or(s, n);
    // $ExpectType string | number
    R.or(s)(n);
};
