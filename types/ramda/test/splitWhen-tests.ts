import * as R from 'ramda';

() => {
    // $ExpectType [number[], number[]]
    R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]); // => [[1], [2, 3, 1, 2, 3]]
    // $ExpectType [(2 | 1 | 3)[], (2 | 1 | 3)[]] || [(1 | 2 | 3)[], (1 | 2 | 3)[]] || [(2 | 3 | 1)[], (2 | 3 | 1)[]]
    R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, 3]); // => [[1], [2, 3, 1, 2, 3]]
    // $ExpectType [(string | number)[], (string | number)[]]
    R.splitWhen(R.equals<string | number>(2), [1, 2, 3, 1, 2, '3']); // => [[1], [2, 3, 1, 2, '3']]
    // $ExpectType [(string | number)[], (string | number)[]]
    R.splitWhen<string | number>(R.equals<string | number>(2), [1, 2, 3, 1, 2, '3']); // => [[1], [2, 3, 1, 2, '3']]
    // @ts-expect-error
    R.splitWhen(R.equals(2))(['1', '2']);
    // @ts-expect-error
    R.splitWhen(R.equals(2))([1, 2, 3, 1, 2, '3']);
};
