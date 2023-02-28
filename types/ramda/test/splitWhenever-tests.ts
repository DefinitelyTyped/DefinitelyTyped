import * as R from 'ramda';

() => {
    // $ExpectType number[][]
    R.splitWhenever(R.equals(2), [1, 2, 3, 2, 4, 5, 2, 6, 7]); // => [[1], [3], [4, 5], [6, 7]]
    // $ExpectType (2 | 1)[][] || (1 | 2)[][]
    R.splitWhenever(R.equals(2))([1, 2, 1, 2, 1]); // => [[1], [1], [1]]
    // $ExpectType ("2" | "1")[][] || ("1" | "2")[][]
    R.splitWhenever(R.equals('2'))(['1', '2', '1', '2', '1']); // => [['1'], ['1'], ['1']]
    // $ExpectType (string | number)[][]
    R.splitWhenever(R.either(R.equals<string | number>('2'), R.equals<string | number>(2)), [
        '1',
        '2',
        3,
        2,
        '4',
        '5',
        2,
        6,
        '7',
    ]); // => [['1'], [3], ['4', '5'], [6, '7']]
    // @ts-expect-error
    R.splitWhenever(R.equals(2), ['1', '2']);
    // @ts-expect-error
    R.splitWhenever(R.equals(2), [1, '2']);
};
