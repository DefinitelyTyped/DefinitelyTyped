import * as R from 'ramda';

() => {
    // $ExpectType 9 | 3
    R.min(9, 3); // => 3
    // $ExpectType "a" | "z"
    R.min('a', 'z'); // => 'a'
    let a = 'a';
    // $ExpectType string
    R.min(a, 'z'); // => 'a'
    let n = 9;
    // $ExpectType number
    R.min(n, 3); // => 3
    // $ExpectType number
    R.min(n)(3); // => 3
    // $ExpectType number
    R.min<number>(n)(3); // => 3
    // $ExpectType Date
    R.min(new Date(), new Date());
    // $ExpectError
    R.min(1, {});
    // $ExpectError
    R.min({}, {});
    // $ExpectError
    R.min(1, []);
    // $ExpectError
    R.min([], []);
    // $ExpectError
    R.min('', /a/);
    // $ExpectError
    R.min(/a/, /b/);
    // $ExpectError
    R.min(Symbol(), Symbol());
};
