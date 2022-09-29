import * as R from 'ramda';

() => {
    R.remove(2, 3, [1, 2, 3, 4, 5, 6, 7, 8]); // => [1,2,6,7,8]
    R.remove(2, 3)([1, 2, 3, 4, 5, 6, 7, 8]); // => [1,2,6,7,8]
    R.remove(2)(3, [1, 2, 3, 4, 5, 6, 7, 8]); // => [1,2,6,7,8]
    R.remove(2)(3)([1, 2, 3, 4, 5, 6, 7, 8]); // => [1,2,6,7,8]

    // $ExpectType (list: readonly symbol[]) => symbol[]
    const f = R.remove<symbol>(2)(3);
};
