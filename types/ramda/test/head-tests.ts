import * as R from 'ramda';

() => {
    R.head(['fi', 'fo', 'fum']); // => 'fi'
    R.head([10, 'ten']); // => 10
    R.head(['10', 10]); // => '10'
    R.head('abc'); // => 'a'
    R.head(''); // => ''
};
