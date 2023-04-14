import * as R from 'ramda';

() => {
    const lessThan2 = R.flip(R.lt)(2);
    const lessThan3 = R.flip(R.lt)(3);

    // $ExpectType (list: readonly number[]) => boolean
    const allLessThan2 = R.all(lessThan2);

    // $ExpectType boolean
    R.all(lessThan2)([1, 2]); // => false
    // $ExpectType boolean
    R.all(lessThan3)([1, 2]); // => true
};
