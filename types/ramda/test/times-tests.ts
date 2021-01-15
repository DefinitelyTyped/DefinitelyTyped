import * as R from 'ramda';

function i(x: number) {
  return x;
}
R.times(i, 5);

() => {
  const a1 = R.times(R.identity, 5); // => [0, 1, 2, 3, 4]
  const a2 = R.times(R.identity)(5); // => [0, 1, 2, 3, 4]
};
