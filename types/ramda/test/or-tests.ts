import * as R from 'ramda';

() => {
    // $ExpectType true
    R.or(true, true); // => true
    // $ExpectType boolean
    R.or(true, false); // => true
    // $ExpectType boolean
    R.or(false)(true); // => true
    // $ExpectType boolean
    R.or(false)(false); // => false
    // $ExpectError
    R.or(0, []); // => []
    // $ExpectError
    R.or(0)([]); // => []
    // $ExpectType "" | null
    R.or(null, ''); // => ''
    // $ExpectError
    R.or(null)(''); // => ''
    // $ExpectError
    R.or(String(''), Number(0));
    // $ExpectError
    R.or(String(''))(Number(0));
};
