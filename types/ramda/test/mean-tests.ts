import * as R from 'ramda';

() => {
    const a: number = R.mean([2, 7, 9]); // => 6
    const b: number = R.mean([]); // => NaN
};
