import * as R from 'ramda';

() => {
    function takesThreeArgs(a: number, b: number, c: number) {
        return [a, b, c];
    }

    takesThreeArgs.length; // => 3
    takesThreeArgs(1, 2, 3); // => [1, 2, 3]

    // $ExpectError
    const takesTwoArgs = R.binary(takesThreeArgs);
    takesTwoArgs.length; // => 2
    // Only 2 arguments are passed to the wrapped function
    // $ExpectError
    takesTwoArgs(1, 2, 3); // => [1, 2, undefined]
};

() => {
    function takesOneArg(a: number) {
        return [a];
    }
    function takesTwoArgs(a: number, b: number) {
        return [a, b];
    }
    function takesThreeArgs(a: number, b: number, c: number) {
        return [a, b, c];
    }

    // $ExpectType (a: number, _: unknown) => number[]
    R.binary(takesOneArg);
    // $ExpectType (a: number, b: number) => number[]
    R.binary(takesTwoArgs);
    // Error since `undefined` is not assignable to `number`
    // $ExpectError
    R.binary(takesThreeArgs);
};
