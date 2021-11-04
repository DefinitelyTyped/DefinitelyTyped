import * as R from 'ramda';

() => {
  const digits = ['1', '2', '3', '4'];

  function append(a: string, b: string): [string, string] {
    return [a + b, a + b];
  }

  R.mapAccum(append, '0', digits); // => ['01234', ['01', '012', '0123', '01234']]
  R.mapAccum(append)('0', digits); // => ['01234', ['01', '012', '0123', '01234']]
  R.mapAccum(append, '0')(digits); // => ['01234', ['01', '012', '0123', '01234']]
};
