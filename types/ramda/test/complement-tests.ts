import * as R from "ramda";

(() => {
    function isEven(n: number) {
        return n % 2 === 0;
    }

    // $ExpectType (n: number) => boolean
    const isOdd = R.complement(isEven);
    isOdd(21); // => true
    isOdd(42); // => false

    function isLengthEqual(value: string, length: number): boolean {
        return value.length === length;
    }

    const isLengthNotEqual = R.complement(isLengthEqual);

    // @ts-expect-error
    isLengthNotEqual("FOO", "BAR");
    isLengthNotEqual("BAZ", 4); // => true

    // $ExpectType <T>(value: T) => value is Exclude<T, (null | undefined) & T>
    R.complement(R.isNil);

    function fn(a: string | undefined) {
        if (R.complement(R.isNil)(a)) {
            // $ExpectType string
            a;
        }
    }

    const isStringAndNotNumber = (value: string | number): value is string => true;

    // $ExpectType (value: string | number) => value is number
    const isNumberAndNotString = R.complement(isStringAndNotNumber);
});
