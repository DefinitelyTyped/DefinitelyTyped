import * as R from 'ramda';

() => {
    function strEq(a: unknown, b: unknown) {
        return String(a) === String(b);
    }

    // $ExpectType (string | number)[]
    R.uniqWith(strEq, [1, '1', 2, 1]); // => [1, 2]
    // $ExpectType unknown[]
    R.uniqWith(strEq)([1, '1', 2, 1]); // => [1, 2]
    // $ExpectType (string | number)[]
    R.uniqWith<string | number>(strEq)([1, '1', 2, 1]); // => [1, 2]
    // $ExpectType unknown[]
    R.uniqWith(strEq)([{}, {}]); // => [{}]
    // $ExpectType unknown[]
    R.uniqWith(strEq)([1, '1', 1]); // => [1]
    // $ExpectType unknown[]
    R.uniqWith(strEq)(['1', 1, 1]); // => ['1']
};
