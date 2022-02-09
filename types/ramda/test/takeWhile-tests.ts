import * as R from 'ramda';

() => {
  function isNotFour(x: number) {
    return !(x === 4);
  }

  R.takeWhile(isNotFour, [1, 2, 3, 4]); // => [1, 2, 3]
  R.takeWhile(isNotFour)([1, 2, 3, 4]); // => [1, 2, 3]
};
