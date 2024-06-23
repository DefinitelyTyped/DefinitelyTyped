import * as R from "ramda";

(() => {
    function isOdd(n: number) {
        return n % 2 === 1;
    }

    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
    R.reject(isOdd, { a: 0, b: 1 }); // => { a: 0 }
});

(() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }
    const rejectEven = R.reject(isEven);
    const objB: Record<string, number> = rejectEven({ a: 0, b: 1 }); // => { b: 1 }
    const listB: number[] = rejectEven([0, 1]); // => [1]
});

(() => {
    function isOdd(n: number) {
        return n % 2 === 1;
    }

    R.reject(isOdd, [1, 2, 3, 4]); // => [2, 4]
    R.reject(isOdd)([1, 2, 3, 4]); // => [2, 4]
});

(() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    // @ts-expect-error
    R.reject(isEven, ["foo"]);
});

(() => {
    const rejectNumbers = R.reject(R.is(Number));

    const unknownArray: Array<string | number> = [];
    let numberArray: number[];
    let stringArray: string[];

    // @ts-expect-error
    numberArray = R.reject(R.is(Number), unknownArray);
    // @ts-expect-error
    numberArray = rejectNumbers(unknownArray);
    stringArray = R.reject(R.is(Number), unknownArray);
    stringArray = rejectNumbers(unknownArray);

    const unknownDictionary: Record<string, string | number> = {};
    let numberDictionary: Record<string, number>;
    let stringDictionary: Record<string, string>;

    // @ts-expect-error
    numberDictionary = R.reject(R.is(Number), unknownDictionary);
    // @ts-expect-error
    numberDictionary = rejectNumbers(unknownDictionary);
    stringDictionary = R.reject(R.is(Number), unknownDictionary);
    stringDictionary = rejectNumbers(unknownDictionary);
});
