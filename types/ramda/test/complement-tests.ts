import * as R from 'ramda';

() => {
  function isEven(n: number) {
    return n % 2 === 0;
  }

  // $ExpectType (n: number) => boolean
  const isOdd = R.complement(isEven);
  isOdd(21); // => true
  isOdd(42); // => false

  function isLengthEqual(value: string, length: number): boolean {
    return value.length === length;
  }

  const isLengthNotEqual = R.complement(isLengthEqual);

  // $ExpectError
  isLengthNotEqual("FOO", "BAR");
  isLengthNotEqual("BAZ", 4); // => true

  // $ExpectType (value: any) => boolean
  R.complement(R.isNil);
};
