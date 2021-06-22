import * as R from 'ramda';

() => {
  R.aperture(2, [1, 2, 3, 4, 5]); // => [[1, 2], [2, 3], [3, 4], [4, 5]]
  R.aperture(3, [1, 2, 3, 4, 5]); // => [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
  R.aperture(7, [1, 2, 3, 4, 5]); // => []
  R.aperture(7)([1, 2, 3, 4, 5]); // => []

  const res1: Array<[number, number]> = R.aperture(2, [1, 2, 3, 4, 5]);
  const res2: number[][] = R.aperture(
    11,
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
  );
};
