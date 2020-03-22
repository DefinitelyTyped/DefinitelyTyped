import * as R from 'ramda';

() => {
    const o = {};
    R.identical(o, o); // => true
    R.identical(1, 1); // => true
    R.identical('2', '1'); // => false
    R.identical([], []); // => false
    R.identical(0, -0); // => false
    R.identical(NaN, NaN); // => true
};
