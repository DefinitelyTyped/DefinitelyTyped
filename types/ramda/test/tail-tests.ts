import * as R from 'ramda';

() => {
  R.tail(['fi', 'fo', 'fum']); // => ['fo', 'fum']
  R.tail([1, 2, 3]); // => [2, 3]
  R.tail('abc'); // => 'bc'
  R.tail(''); // => ''
};
