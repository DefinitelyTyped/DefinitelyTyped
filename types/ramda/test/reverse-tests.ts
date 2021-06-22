import * as R from 'ramda';

() => {
  R.reverse([1, 2, 3]); // => [3, 2, 1]
  R.reverse([1, 2]); // => [2, 1]
  R.reverse([1]); // => [1]
  R.reverse([]); // => []
};

() => {
  R.reverse('abc'); // => 'cba'
  R.reverse('ab'); // => 'ba'
  R.reverse('a'); // => 'a'
  R.reverse(''); // => ''
};
