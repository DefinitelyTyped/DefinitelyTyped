import * as R from 'ramda';

() => {
    // $ExpectType (list: readonly number[]) => number
    const indexOf3 = R.indexOf(3);

    indexOf3([1, 2]); // => -1

    indexOf3([1, 2, 3, 4]); // => 2

    // @ts-expect-error
    indexOf3('123');
};

() => {
    // $ExpectType (list: string | readonly string[]) => number
    const indexOfString3 = R.indexOf('3');

    // @ts-expect-error
    indexOfString3([1, 2]);

    indexOfString3('123'); // => 2

    indexOfString3(['1', '2']);
};

() => {
    R.indexOf(3, [1, 2, 3, 4]); // => 2

    // @ts-expect-error
    R.indexOf('3', [1, 2, 3, 4]);

    // $ExpectType number
    R.indexOf('3', '123'); // => 2

    // $ExpectType number
    R.indexOf('3', ['1', '2']);
};
