import * as R from 'ramda';

() => {
  R.lt(2, 6); // => true
  R.lt(2, 0); // => false
  R.lt(2, 2); // => false
  R.lt(5)(10); // => true
};
