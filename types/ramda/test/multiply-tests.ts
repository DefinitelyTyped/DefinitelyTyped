import * as R from 'ramda';

() => {
    const double = R.multiply(2);
    const triple = R.multiply(3);
    double(3); // =>  6
    triple(4); // => 12
    R.multiply(2, 5); // => 10
};
