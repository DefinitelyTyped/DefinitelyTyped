import * as R from 'ramda';

() => {
    function isOdd(n: number) {
        return n % 2 === 1;
    }

    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
    R.reject(isOdd, { a: 0, b: 1 }); // => { a: 0 }
};

() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }
    const rejectEven = R.reject(isEven);
    const objB: R.Dictionary<number> = rejectEven({ a: 0, b: 1 }); // => { b: 1 }
    const listB: number[] = rejectEven([0, 1]); // => [1]
};

() => {
    function isOdd(n: number) {
        return n % 2 === 1;
    }

    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
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
    let numberArray: number[];
    let stringArray: string[];

    // $ExpectError
    numberArray = R.reject(R.is(Number), unknownArray);
    // $ExpectError
    numberArray = rejectNumbers(unknownArray);
    stringArray = R.reject(R.is(Number), unknownArray);
    stringArray = rejectNumbers(unknownArray);

    const unknownDictionary: R.Dictionary<string | number> = {};
    let numberDictionary: R.Dictionary<number>;
    let stringDictionary: R.Dictionary<string>;

    // $ExpectError
    numberDictionary = R.reject(R.is(Number), unknownDictionary);
    // $ExpectError
    numberDictionary = rejectNumbers(unknownDictionary);
    stringDictionary = R.reject(R.is(Number), unknownDictionary);
    stringDictionary = rejectNumbers(unknownDictionary);
};
