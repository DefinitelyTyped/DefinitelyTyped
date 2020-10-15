import * as R from 'ramda';

() => {
  function isEven(n: number) {
    return n % 2 === 0;
  }

  // $ExpectType (n: number) => boolean
  const isOdd = R.complement(isEven);

  // $ExpectType boolean
  isOdd(21); // => true
  isOdd(42); // => false
};
