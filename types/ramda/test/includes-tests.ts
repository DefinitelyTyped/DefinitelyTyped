import * as R from 'ramda';

() => {
    // $ExpectType boolean
    R.includes('ba', 'banana'); // => true
    // $ExpectType boolean
    R.includes('ba')('kiwi'); // => false
    // $ExpectType boolean
    R.includes('ma', ['ma', 'ng', 'o']); // => true
    // $ExpectType boolean
    R.includes('ma')(['li', 'me']); // => false
    // $ExpectType boolean
    R.includes(8, [1, 8, 9, 17]); // => true
    // $ExpectType boolean
    R.includes(1)([2, 3, 5, 8]); // => false
    // $ExpectType boolean
    R.includes(R.__)(['ma', 'ng', 'o'], 'ma'); // => true
    // $ExpectType boolean
    R.includes(R.__)('mango', 'ma'); // => true
    // $ExpectType boolean
    R.includes(R.__)([1, 2, 3], 1); // => true
    // $ExpectType boolean
    R.includes(R.__, ['ma', 'ng', 'o'])('ma'); // => true
    // $ExpectType boolean
    R.includes(R.__, 'mango')('ma'); // => true
    // $ExpectType boolean
    R.includes(R.__, [1, 2, 3])(1); // => true
    // $ExpectType boolean
    R.includes<number>(R.__)([2, 3, 5, 8], 1); // => false

    // $ExpectError
    R.includes('ba', 1); // => true
    // $ExpectError
    R.includes('ba')(1); // => false
    // $ExpectError
    R.includes(1, ['ma', 'ng', 'o']); // => true
    // $ExpectError
    R.includes(1)(['li', 'me']); // => false
    // $ExpectError
    R.includes(R.__)(['ma', 'ng', 'o'], 1); // => true
    // $ExpectError
    R.includes(R.__)('mango', 1); // => true
    // $ExpectError
    R.includes(R.__)([1, 2, 3], '1'); // => true
    // $ExpectError
    R.includes(R.__, ['ma', 'ng', 'o'])(1); // => true
    // $ExpectError
    R.includes(R.__, 'mango')(1); // => true
    // $ExpectError
    R.includes(R.__, [1, 2, 3])('1'); // => true
    // $ExpectError
    R.includes<number>(R.__)([2, 3, 5, 8], '1'); // => false
};
