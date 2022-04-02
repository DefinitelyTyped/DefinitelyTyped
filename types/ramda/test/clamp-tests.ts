import * as R from 'ramda';

() => {
    // $ExpectType 1 | -1 | 10 || 1 | 10 | -1
    R.clamp(1, 10, -1); // => 1
    // $ExpectType number
    R.clamp(1, 10)(11); // => 10
    // $ExpectType number
    R.clamp(1)(10, 4); // => 4
    // $ExpectType number
    R.clamp(1)(10)(4); // => 4
    // $ExpectType "a" | "d" | "e"
    R.clamp('a', 'd', 'e'); // => 'd'
};
