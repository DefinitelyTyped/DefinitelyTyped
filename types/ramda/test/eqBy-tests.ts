import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.eqBy(Math.abs, 5, -5); // => true
};
