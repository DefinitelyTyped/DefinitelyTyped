import * as R from 'ramda';

() => {
  function diff(a: number, b: number) {
    return a - b;
  }

  R.sort(diff, [4, 2, 7, 5]); // => [2, 4, 5, 7]
  R.sort(diff)([4, 2, 7, 5]); // => [2, 4, 5, 7]
};
