import * as R from 'ramda';

() => {
    // $ExpectType 7 | 3
    R.max(7, 3); // => 7
    // $ExpectType "a" | "z"
    R.max('a', 'z'); // => 'z'
    let a = 'a';
    // $ExpectType string
    R.max(a, 'z'); // => 'z'
    let n = 7;
    // $ExpectType number
    R.max(n, 3); // => 7
    // $ExpectType number
    R.max(n)(3); // => 7
    // $ExpectType number
    R.max<number>(n)(3); // => 7
    // $ExpectType Date
    R.max(new Date(), new Date());
    // $ExpectError
    R.max(1, {});
    // $ExpectError
    R.max({}, {});
    // $ExpectError
    R.max(1, []);
    // $ExpectError
    R.max([], []);
    // $ExpectError
    R.max('', /a/);
    // $ExpectError
    R.max(/a/, /b/);
    // $ExpectError
    R.max(Symbol(), Symbol());
};
