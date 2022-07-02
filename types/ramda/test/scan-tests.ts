import * as R from 'ramda';

() => {
    const numbers = [1, 2, 3, 4];
    R.scan(R.multiply, 1, numbers); // => [1, 1, 2, 6, 24]
    R.scan(R.multiply, 1)(numbers); // => [1, 1, 2, 6, 24]
    R.scan(R.multiply)(1, numbers); // => [1, 1, 2, 6, 24]
};
