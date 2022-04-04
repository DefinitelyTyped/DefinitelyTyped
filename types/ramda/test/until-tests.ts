import * as R from 'ramda';

() => {
    // $ExpectType number
    R.until(R.flip(R.gt)(100), R.multiply(2))(1); // => 128
    // TODO: more tests
};
