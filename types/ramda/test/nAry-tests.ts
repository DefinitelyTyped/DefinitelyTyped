import * as R from 'ramda';

() => {
  function takesNoArg() {
    return true;
  }
  function takesOneArg(a: number) {
    return [a];
  }
  function takesTwoArgs(a: number, b: number) {
    return [a, b];
  }
  function takesThreeArgs(a: number, b: number, c: number) {
    return [a, b, c];
  }

  R.nAry(0);
  R.nAry(0, takesNoArg);
  R.nAry(0, takesOneArg);
  R.nAry(1, takesTwoArgs);
  R.nAry(1, takesThreeArgs);
};
