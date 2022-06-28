import * as R from 'ramda';

() => {
    const a = R.pluck('a')([{ a: 1 }, { a: 2 }]); // => [1, 2]
    const b = R.pluck(0)([
        [1, 2],
        [3, 4],
    ]); // => [1, 3]
};
