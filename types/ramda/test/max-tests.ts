import * as R from 'ramda';

() => {
  const x: number = R.max(7, 3); // => 7
  const y: string = R.max('a', 'z'); // => 'z'
};
