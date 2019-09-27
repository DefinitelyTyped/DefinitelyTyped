import * as R from 'ramda';

() => {
  R.gte(2, 6); // => false
  R.gte(2, 0); // => true
  R.gte(2, 2); // => false
  R.gte(2)(10); // => false
};
