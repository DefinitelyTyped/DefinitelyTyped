import * as R from 'ramda';

() => {
    // $ExpectType (str: string) => boolean
    const startsWithStringC = R.startsWith('a');
    // $ExpectType boolean
    startsWithStringC('abc'); // => true
    // $ExpectType boolean
    startsWithStringC('bcd'); // => false

    // @ts-expect-error
    R.startsWith(1, [1, 2, 3]);

    // $ExpectType (list: readonly number[]) => boolean
    const startsWithSubList = R.startsWith([1, 2]);

    startsWithSubList([1, 2, 3]); // => true

    startsWithSubList([1, 2, 4]); // => false
};
