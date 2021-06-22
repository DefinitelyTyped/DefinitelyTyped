import * as R from 'ramda';

() => {
  R.zip([1, 2, 3], ['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]
  R.zip([1, 2, 3])(['a', 'b', 'c']); // => [[1, 'a'], [2, 'b'], [3, 'c']]

  type TNames = string[];
  const fullNames: TNames[] = R.zip<string, string>(
    ['John', 'Juliet', 'Melanie'],
    ['Titor', 'Burke', 'Cross'],
  );
  const fullNames2: TNames[] = R.zip(['John', 'Juliet', 'Melanie'])([
    'Titor',
    'Burke',
    'Cross',
  ]);

  type TNameAge = [string, number];
  const namesAndAges: TNameAge[] = R.zip<string, number>(
    ['John', 'Juliet', 'Melanie'],
    [21, 22, 23],
  );
  const namesAndAges2: TNameAge[] = R.zip(['John', 'Juliet', 'Melanie'])([
    21,
    22,
    23,
  ]);
};
