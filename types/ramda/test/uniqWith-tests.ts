import * as R from 'ramda';

() => {
  function strEq(a: any, b: any) {
    return String(a) === String(b);
  }

  R.uniqWith(strEq, [1, '1', 2, 1]); // => [1, 2]
  R.uniqWith(strEq)([1, '1', 2, 1]); // => [1, 2]
  R.uniqWith(strEq)([{}, {}]); // => [{}]
  R.uniqWith(strEq)([1, '1', 1]); // => [1]
  R.uniqWith(strEq)(['1', 1, 1]); // => ['1']
};
