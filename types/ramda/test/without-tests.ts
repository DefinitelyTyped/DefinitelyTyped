import * as R from 'ramda';

() => {
    const a: number[] = R.without([1, 2], [1, 2, 1, 3, 4]); // => [3, 4]
};
