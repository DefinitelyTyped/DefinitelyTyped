import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.and(false, true); // => false
    // $ExpectType 0 | never[]
    R.and(0, []); // => 0
    // $ExpectType number | never[]
    R.and(0)([]); // => 0
    // $ExpectType "" | null
    R.and(null, ''); // => null
};
