import * as R from 'ramda';

() => {
    // $ExpectType true
    R.or(false, true); // => false
    // $ExpectType boolean
    R.or(false, Boolean(true)); // => false
    // $ExpectType false
    R.or(false, false); // => false
    // $ExpectType never[]
    R.or(0, []); // => []
    // $ExpectType never[]
    R.or(0)([]); // => []
    // $ExpectType ""
    R.or(null, ''); // => ''
    // $ExpectType string | number
    R.or(Number(0), String(''));
    // $ExpectType number | string[]
    R.or(Number(0), Array(''));
};
