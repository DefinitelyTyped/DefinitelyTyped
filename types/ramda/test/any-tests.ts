import * as R from 'ramda';

() => {
    const lessThan0 = R.flip(R.lt)(0);
    const lessThan2 = R.flip(R.lt)(2);
    // $ExpectType boolean
    R.any(lessThan0)([1, 2]); // => false
    // $ExpectType boolean
    R.any(lessThan2)([1, 2]); // => true
};
