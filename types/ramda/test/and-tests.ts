import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.and(false, true); // => false
    // $ExpectError
    R.and(0, []); // => 0
    // $ExpectError
    R.and(0)([]); // => 0
    // $ExpectType "" | null
    R.and(null, ''); // => null
};
