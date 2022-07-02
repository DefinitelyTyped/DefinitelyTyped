import * as R from 'ramda';

() => {
    const nums = [1, 2, 3, -99, 42, 6, 7];

    // $ExpectType (args: number[]) => number
    R.apply(Math.max);

    R.apply(Math.max, nums); // => 42
    R.apply(Math.max)(nums); // => 42

    const repeat = (value: string, n: number): string[] => Array(n).fill(value);

    // $ExpectType (args: [value: string, n: number]) => string[]
    const applyRepeat = R.apply(repeat);

    // $ExpectType string[]
    applyRepeat(['a', 2]); // => ['a', 'a', 'a']
};
