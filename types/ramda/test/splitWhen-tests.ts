import * as R from 'ramda';

() => {
  const a: number[][] = R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]); // => [[1], [2, 3, 1, 2, 3]]
  const b: number[][] = R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3]); // => [[1], [2, 3, 1, 2, 3]]
};
