import * as R from 'ramda';

() => {
  const lessThan2 = R.flip(R.lt)(2);
  const lessThan3 = R.flip(R.lt)(3);
  R.all(lessThan2)([1, 2]); // => false
  R.all(lessThan3)([1, 2]); // => true
};
