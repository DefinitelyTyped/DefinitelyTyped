import * as R from 'ramda';

() => {
    // $ExpectType string[]
    R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']); // => ['a', 'B', 'c', 'd']
    // $ExpectType string[]
    R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']); // => ['a', 'b', 'c', 'D']

    // $ExpectType number[]
    R.adjust(-1, R.add(1), [1, 2, 3, 4]); // => [1, 2, 3, 5]
    // $ExpectError
    R.adjust(-1, R.add(1), ['a', 'b', 'c', 'd']);
};
