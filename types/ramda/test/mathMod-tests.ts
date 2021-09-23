import * as R from 'ramda';

() => {
  R.mathMod(-17, 5); // => 3
  R.mathMod(17, 5); // => 2
  R.mathMod(17, -5); // => NaN
  R.mathMod(17, 0); // => NaN
  R.mathMod(17.2, 5); // => NaN
  R.mathMod(17, 5.3); // => NaN

  const seventeenMod = R.mathMod(17);
  seventeenMod(3); // => 2
};

() => {
  R.mathMod(R.__, 12)(15); // 3
  R.mathMod(R.__)(12, 15); // 3
};
