import * as R from 'ramda';

() => {
    // $ExpectType string
    R.last(['fi', 'fo', 'fum']); // => 'fum'
    // $ExpectType undefined
    R.last([]); // => 'fum'
    const l = ['fi', 'fo', 'fum'];
    // $ExpectType string | undefined
    R.last(l); // => 'fum'
    // $ExpectType string
    R.last('abc'); // => 'c'
    // $ExpectType ""
    R.last(''); // => ''
};
