import * as R from 'ramda';

(() => {
  function isOdd(n: number) {
      return n % 2 === 1;
  }

  R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
  R.reject(isOdd, { a: 0, b: 1 }); // => { a: 0 }
});

() => {
  function isEven(n: number) {
    return n % 2 === 0;
  }
  const rejectEven = R.reject(isEven);
  const objB: R.Dictionary<number> = rejectEven({ a: 0, b: 1 }); // => { b: 1 }
  const listB: number[] = rejectEven([0, 1]); // => [1]
};

() => {
  function isOdd(n: number) {
    return n % 2 === 1;
  }

  R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
  R.reject(isOdd)([1, 2, 3, 4]); // => [2, 4]
};
