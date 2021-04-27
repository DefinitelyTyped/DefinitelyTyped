import * as R from 'ramda';

() => {
  R.subtract(10, 8); // => 2

  const complementaryAngle = R.subtract(90);
  complementaryAngle(30); // => 60
  complementaryAngle(72); // => 18
};

() => {
  R.subtract(R.__, 5)(17); // 12
  R.subtract(R.__)(5, 17); // 12
};
