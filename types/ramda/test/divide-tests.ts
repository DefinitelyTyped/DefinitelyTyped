import * as R from 'ramda';

() => {
  R.divide(71, 100); // => 0.71

  const half = R.flip(R.divide)(2);
  half(42); // => 21

  const reciprocal = R.divide(1);
  reciprocal(4); // => 0.25
};
