import * as R from 'ramda';

() => {
  R.lte(2, 6); // => true
  R.lte(2, 0); // => false
  R.lte(2, 2); // => true
  R.lte(2)(10); // => true
};
