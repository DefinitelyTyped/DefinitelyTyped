import * as R from 'ramda';

() => {
    function isOdd(n: number) {
        return n % 2 === 1;
    }

    // $ExpectType number[]
    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
    // $ExpectType Record<string, number>
    R.reject(isOdd, { a: 0, b: 1 }); // => { a: 0 }
};

() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }
    const rejectEven = R.reject(isEven);
    // $ExpectType Record<string, 0 | 1>
    rejectEven({ a: 0, b: 1 }); // => { b: 1 }
    // $ExpectType (0 | 1)[]
    rejectEven([0, 1]); // => [1]
};

() => {
    function isOdd(n: number) {
        return n % 2 === 1;
    }

    // $ExpectType number[]
    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
    // $ExpectType (2 | 1 | 4 | 3)[] || (2 | 1 | 3 | 4)[] || (2 | 3 | 1 | 4)[]
    R.reject(isOdd)([1, 2, 3, 4]); // => [2, 4]
};

() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    // $ExpectError
    R.reject(isEven, ['foo']);
};

() => {
    const rejectNumbers = R.reject(R.is(Number));

    const unknownArray: Array<string | number> = [];
    // $ExpectType string[]
    R.reject(R.is(Number), unknownArray);
    // $ExpectType string[]
    rejectNumbers(unknownArray);

    const unknownDictionary: Record<string, string | number> = {};
    // $ExpectType Record<string, string>
    R.reject(R.is(Number), unknownDictionary);
    // $ExpectType Record<string, string>
    rejectNumbers(unknownDictionary);
};
