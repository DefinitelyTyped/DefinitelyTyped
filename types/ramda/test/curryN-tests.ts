import * as R from 'ramda';

() => {
  function addFourNumbers(a: number, b: number, c: number, d: number): number {
    return a + b + c + (d || 0);
  }

  R.curryN(3)(addFourNumbers)(1, 2, 3); // $ExpectType number
  R.curryN(3, addFourNumbers)(1, 2, 3); // $ExpectType number

  R.curryN(3)(addFourNumbers)(1, 2)(3); // $ExpectType number
  R.curryN(3, addFourNumbers)(1, 2)(3); // $ExpectType number

  R.curryN(3)(addFourNumbers)(1)(2, 3); // $ExpectType number
  R.curryN(3, addFourNumbers)(1)(2, 3); // $ExpectType number

  R.curryN(3)(addFourNumbers)(1)(2)(3); // $ExpectType number
  R.curryN(3, addFourNumbers)(1)(2)(3); // $ExpectType number

  R.curryN(3)(addFourNumbers)(R.__, 1, 2)(3); // $ExpectType number
  R.curryN(3, addFourNumbers)(R.__, 1, 2)(3); // $ExpectType number
};
