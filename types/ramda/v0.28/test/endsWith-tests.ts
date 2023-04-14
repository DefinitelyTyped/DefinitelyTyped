import * as R from 'ramda';

() => {
    // $ExpectType (str: string) => boolean
    const endsWithStringC = R.endsWith('c');
    // $ExpectType boolean
    endsWithStringC('abc'); // => true
    // $ExpectType boolean
    endsWithStringC('abc'); // => true

    // @ts-expect-error
    R.endsWith(3, [1, 2, 3]);

    // $ExpectType (list: readonly number[]) => boolean
    const endsWithSubList = R.endsWith([2, 3]);

    endsWithSubList([1, 2, 3]); // => true
    endsWithSubList([1, 2, 4]); // => false
};
