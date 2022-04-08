import * as R from 'ramda';

() => {
  function gt10(x: number) {
    return x > 10;
  }

  function even(x: number) {
    return x % 2 === 0;
  }

  const f = R.either(gt10, even);
  const g = R.either(gt10)(even);
  f(101); // => true
  f(8); // => true
};
