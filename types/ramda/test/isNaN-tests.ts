import * as R from 'ramda';

() => {
  R.isNaN(NaN); // => true
  R.isNaN(undefined); // => false
  R.isNaN({}); // => false
};
