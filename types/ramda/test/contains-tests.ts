import * as R from 'ramda';

() => {
    R.contains(3)([1, 2, 3]); // => true
    R.contains(3, [1, 2, 3]); // => true
    R.contains(4)([1, 2, 3]); // => false
    R.contains({})([{}, {}]); // => false
    const obj = {};
    R.contains(obj)([{}, obj, {}]); // => true
};

() => {
    R.contains(R.__, [1, 2, 3])(3); // true
    R.contains<number>(R.__)([1, 2, 3], 3); // true
};
