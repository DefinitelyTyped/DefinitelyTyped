import * as R from 'ramda';

() => {
    // $ExpectType number[]
    R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
};

() => {
    // $ExpectType number[]
    R.ap([R.multiply(2), R.add(3)], [1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
    // $ExpectType number[]
    R.ap([R.multiply(2), R.add(3)])([1, 2, 3]); // => [2, 4, 6, 4, 5, 6]
    // $ExpectType string
    R.ap<string, string, string>(R.concat, R.toUpper)('Ramda'); // => 'RamdaRAMDA'
};
