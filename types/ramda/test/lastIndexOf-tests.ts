import * as R from 'ramda';

() => {
    // $ExpectType (list: readonly number[]) => number
    const lastIndexOf3 = R.lastIndexOf(3);

    lastIndexOf3([1, 2]);

    lastIndexOf3([1, 2, 3, 4]);

    // @ts-expect-error
    lastIndexOf3('123');
};

() => {
    // $ExpectType (list: string | readonly string[]) => number
    const lastIndexOfString3 = R.lastIndexOf('3');

    // @ts-expect-error
    lastIndexOfString3([1, 2]);

    lastIndexOfString3('123');

    lastIndexOfString3(['1', '2']);
};

() => {
    R.lastIndexOf(3, [1, 2, 3, 4]);

    // @ts-expect-error
    R.lastIndexOf('3', [1, 2, 3, 4]);

    // $ExpectType number
    R.lastIndexOf('3', '123');

    // $ExpectType number
    R.lastIndexOf('3', ['1', '2']);
};
