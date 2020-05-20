import * as R from 'ramda';

() => {
  R.contains(3)([1, 2, 3]); // => true
  R.contains(3, [1, 2, 3]); // => true
  R.contains(4)([1, 2, 3]); // => false
  R.contains({})([{}, {}]); // => false
  const obj = {};
  R.contains(obj)([{}, obj, {}]); // => true
};
