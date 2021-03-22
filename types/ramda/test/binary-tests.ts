import * as R from 'ramda';

() => {
  function takesThreeArgs(a: number, b: number, c: number) {
    return [a, b, c];
  }

  takesThreeArgs.length; // => 3
  takesThreeArgs(1, 2, 3); // => [1, 2, 3]

  const takesTwoArgs = R.binary(takesThreeArgs);
  takesTwoArgs.length; // => 2
  // Only 2 arguments are passed to the wrapped function
  // $ExpectError
  takesTwoArgs(1, 2, 3); // => [1, 2, undefined]
};

() => {
  function takesOneArg(a: number) {
    return [a];
  }
  function takesTwoArgs(a: number, b: number) {
    return [a, b];
  }
  function takesThreeArgs(a: number, b: number, c: number) {
    return [a, b, c];
  }

  R.binary(takesOneArg); // $ExpectType (head: number, head: undefined) => number[]
  R.binary(takesTwoArgs); // $ExpectType (head: number, head: number) => number[]
  R.binary(takesThreeArgs); // $ExpectType (head: number, head: number) => number[]
};
