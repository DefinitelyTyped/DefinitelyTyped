import * as R from 'ramda';

() => {
  R.lte(2, 6); // => true
  R.lte(2, 0); // => false
  R.lte(2, 2); // => true
  R.lte(2)(10); // => true
  R.lte('a', 'z'); // => true
  R.lte('z', 'a'); // => false
  R.lte('c', 'c'); // => true
};

() => {
  R.lte(R.__, 2)(1); // true
  R.lte(R.__)(2, 1); // true
};
