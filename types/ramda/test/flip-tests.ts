import * as R from 'ramda';

() => {
  function mergeThree(a: number, b: number, c: number): number[] {
    return new Array<number>().concat(a, b, c);
  }

  mergeThree(1, 2, 3); // => [1, 2, 3]
  const flipped = R.flip(mergeThree);
  flipped(1, 2, 3); // => [2, 1, 3]
};
