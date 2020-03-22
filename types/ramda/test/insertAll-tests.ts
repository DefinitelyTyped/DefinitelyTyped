import * as R from 'ramda';

() => {
    R.insertAll(2, [10, 11, 12], [1, 2, 3, 4]);
    R.insertAll(2)([10, 11, 12], [1, 2, 3, 4]);
    R.insertAll(2, [10, 11, 12])([1, 2, 3, 4]);
};
