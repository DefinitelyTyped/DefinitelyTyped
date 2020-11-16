import * as R from 'ramda';

() => {
  function gt10(x: number) {
    return x > 10;
  }

  function even(x: number) {
    return x % 2 === 0;
  }

  const f = R.allPass([gt10, even]);
  f(11); // => false
  f(12); // => true
};
