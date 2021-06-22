import * as R from 'ramda';

() => {
  const lteThree = (x: number) => x <= 3;
  R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); // => [1, 2, 3, 4]
};
