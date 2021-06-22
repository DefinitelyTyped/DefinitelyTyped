import * as R from 'ramda';

() => {
  R.isEmpty([1, 2, 3]); // => false
  R.isEmpty([]); // => true
  R.isEmpty(''); // => true
  R.isEmpty(null); // => false
  R.isEmpty({}); // =>true
  R.isEmpty({ a: 1 }); // => false
};
