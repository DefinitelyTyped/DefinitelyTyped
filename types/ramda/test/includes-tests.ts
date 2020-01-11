import * as R from 'ramda';

() => {
  R.includes('ba', 'banana'); // => true
  R.includes('ba')('kiwi'); // => false
  R.includes('ma', ['ma', 'ng', 'o']); // => true
  R.includes('ma')(['li', 'me']); // => false
  R.includes(8, [1, 8, 9, 17]); // => true
  R.includes(1)([2, 3, 5, 8]); // => false
};
