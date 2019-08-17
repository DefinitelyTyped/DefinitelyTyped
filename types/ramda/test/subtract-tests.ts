import * as R from 'ramda';

() => {
  R.subtract(10, 8); // => 2

  const minus5 = R.flip(R.subtract)(5);
  minus5(17); // => 12

  const complementaryAngle = R.subtract(90);
  complementaryAngle(30); // => 60
  complementaryAngle(72); // => 18
};
