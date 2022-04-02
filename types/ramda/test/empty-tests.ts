import * as R from 'ramda';

() => {
    // $ExpectType number[]
    R.empty([1, 2, 3, 4, 5]); // => []
    // $ExpectType number[]
    R.empty([1, 2, 3]); // => []
    // $ExpectType (1 | 2 | 3)[] || (2 | 1 | 3)[] || (2 | 3 | 1)[]
    R.empty([1, 2, 3] as const); // => []
    // $ExpectType string
    R.empty('unicorns'); // => ''
    // $ExpectType {}
    R.empty({ x: 1, y: 2 }); // => {}
};
