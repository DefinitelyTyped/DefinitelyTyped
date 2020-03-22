import * as R from 'ramda';

() => {
    R.init(['fi', 'fo', 'fum']); // => ['fi', 'fo']
    R.init('abc'); // => 'ab'
    R.init(''); // => ''
};
