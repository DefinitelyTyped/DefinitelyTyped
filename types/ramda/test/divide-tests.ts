import * as R from 'ramda';

() => {
  R.divide(71, 100); // => 0.71

  const reciprocal = R.divide(1);
  reciprocal(4); // => 0.25
};
