import * as R from 'ramda';

() => {
    const a1 = R.identity(1); // => 1
    const obj = {};
    const a2 = R.identity([1, 2, 3]);
    const a3 = R.identity(['a', 'b', 'c']);
    const a4 = R.identity(obj) === obj; // => true
};
