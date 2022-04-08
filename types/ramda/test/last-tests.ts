import * as R from 'ramda';

() => {
  R.last(['fi', 'fo', 'fum']); // => 'fum'
  R.last('abc'); // => 'c'
  R.last(''); // => ''
};
