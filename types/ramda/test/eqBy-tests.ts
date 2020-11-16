import * as R from 'ramda';

() => {
  R.eqBy(Math.abs, 5, -5); // => true
};
