import * as R from 'ramda';

() => {
    // $ExpectType 7 | 3 || 3 | 7
    R.max(7, 3); // => 7
    // $ExpectType "a" | "z"
    R.max('a', 'z'); // => 'z'
    // $ExpectType string
    R.max(String('a'), 'z'); // => 'z'
    // $ExpectType number
    R.max(Number(7), 3); // => 7
    // $ExpectType number
    R.max(Number(7))(3); // => 7
    // $ExpectType number
    R.max<number>(Number(7))(3); // => 7
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
