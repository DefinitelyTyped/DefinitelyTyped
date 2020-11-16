import * as R from 'ramda';

() => {
  function gt10(x: number) {
    return x > 10;
  }

  function even(x: number) {
    return x % 2 === 0;
  }

  const f = R.both(gt10, even);
  const g = R.both(gt10)(even);
  f(100); // => true
  f(101); // => false
};
