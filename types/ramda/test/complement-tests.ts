import * as R from 'ramda';

() => {
  function isEven(n: number) {
    return n % 2 === 0;
  }

  const isOdd = R.complement(isEven);
  isOdd(21); // => true
  isOdd(42); // => false
};
