import * as R from 'ramda';

() => {
  const digits = ['1', '2', '3', '4'];

  function append(a: string, b: string): [string, string] {
    return [a + b, a + b];
  }

  R.mapAccumRight(append, '0', digits); // => ['04321', ['04321', '0432', '043', '04']]
  R.mapAccumRight(append)('0', digits); // => ['04321', ['04321', '0432', '043', '04']]
  R.mapAccumRight(append, '0')(digits); // => ['04321', ['04321', '0432', '043', '04']]
};
