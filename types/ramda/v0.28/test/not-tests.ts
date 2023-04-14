import * as R from 'ramda';

() => {
    R.not(true); // => false
    R.not(false); // => true
    R.not(0); // => true
    R.not(1); // => false
};
