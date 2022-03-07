import * as R from 'ramda';

() => {
  // $ExpectType number[][]
  R.splitWhenever(R.equals(2), [1, 2, 3, 2, 4, 5, 2, 6, 7]); // => [[1], [3], [4, 5], [6, 7]]
  // $ExpectType number[][]
  R.splitWhenever(R.equals(2))([1, 2, 3, 2, 4, 5, 2, 6, 7]); // => [[1], [3], [4, 5], [6, 7]]
  // $ExpectType string[][]
  R.splitWhenever(R.equals('2'))(['1', '2', '3', '2', '4', '5', '2', '6', '7']); // => [['1'], ['3'], ['4', '5'], ['6', '7']]
  // $ExpectType (string | number)[][]
  R.splitWhenever(R.either(R.equals<string | number>('2'), R.equals(2)), ['1', '2', 3, 2, '4', '5', 2, 6, '7']); // => [['1'], [3], ['4', '5'], [6, '7']]
};
