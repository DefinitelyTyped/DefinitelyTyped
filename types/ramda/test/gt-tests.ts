import * as R from 'ramda';

() => {
  R.gt(2, 6); // => false
  R.gt(2, 0); // => true
  R.gt(2, 2); // => false
  R.gt(2)(10); // => false
};

() => {
  R.gt(R.__, 2)(10); // true
  R.gt(R.__)(2, 10); // true
};
