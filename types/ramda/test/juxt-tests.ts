import * as R from 'ramda';

() => {
    const range = R.juxt([Math.min, Math.max]);
    range(3, 4, 9, -3); // => [-3, 9]

    const chopped = R.juxt([R.head, R.last]);
    chopped([1, 2, 3]); // => [1, 3]
};
