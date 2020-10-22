import * as R from 'ramda';

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

  const u1: (a: number) => number[] = R.unary(takesOneArg);
  const u2: (a: number) => number[] = R.unary(takesTwoArgs);
  const u3: (a: number) => number[] = R.unary(takesThreeArgs);
};
