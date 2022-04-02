import * as R from 'ramda';

() => {
    // $ExpectType string
    R.head(['fi', 'fo', 'fum']); // => 'fi'
    // $ExpectType number
    R.head([10, 'ten']); // => 10
    // $ExpectType string
    R.head(['10', 10]); // => '10'
    const l = ['10', 10];
    // $ExpectType string | number | undefined
    R.head(l); // => '10'
    // $ExpectType "a"
    R.head('abc'); // => 'a'
    const s = 'a' as string;
    // $ExpectType string
    R.head(s); // => 'a'
    // $ExpectType ""
    R.head(''); // => ''
};
