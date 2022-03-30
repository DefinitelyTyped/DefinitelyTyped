import * as R from 'ramda';

() => {
    R.partition((x: number) => x > 2, [1, 2, 3, 4]);
    R.partition((x: number) => x > 2)([1, 2, 3, 4]);
};
