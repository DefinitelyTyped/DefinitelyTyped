import * as R from 'ramda';

() => {
  R.groupWith(R.equals)([0, 1, 1, 2, 3, 5, 8, 13, 21]);

  R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21]);
  // [[0], [1, 1], [2, 3, 5, 8, 13, 21]]

  R.groupWith((a: number, b: number) => a % 2 === b % 2, [
    0,
    1,
    1,
    2,
    3,
    5,
    8,
    13,
    21,
  ]);
  // [[0], [1, 1], [2], [3, 5], [8], [13, 21]]

  const isVowel = (a: string) => (R.contains(a, 'aeiou') ? a : '');
  R.groupWith(R.eqBy<string>(isVowel), 'aestiou');
  // ['ae', 'st', 'iou']
};
