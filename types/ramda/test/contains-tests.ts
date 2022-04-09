import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.contains(3)([1, 2, 3]); // => true
    // $ExpectType boolean
    R.contains(3, [1, 2, 3]); // => true
    // $ExpectType boolean
    R.contains(4)([1, 2, 3]); // => false
    // $ExpectType boolean
    R.contains({})([{}, {}]); // => false
    const obj = {};
    // $ExpectType boolean
    R.contains(obj)([{}, obj, {}]); // => true
    // $ExpectError
    R.contains(4)([1, 2, '3']); // => false
    const arr = [1, 2, '3'];
    // $ExpectError
    R.contains(4)(arr); // => false
    // $ExpectType boolean
    R.contains<string | number>(4)(arr); // => false
};

() => {
    R.contains(R.__, [1, 2, 3])(3); // true
    R.contains<number>(R.__)([1, 2, 3], 3); // true
};
