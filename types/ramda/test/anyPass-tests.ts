import * as R from 'ramda';

() => {
  function gt10(x: number) {
    return x > 10;
  }

  function even(x: number) {
    return x % 2 === 0;
  }

  const f = R.anyPass([gt10, even]);
  f(11); // => true
  f(8); // => true
  f(9); // => false

  const f2 = R.anyPass<number>([gt10, even]);
};
