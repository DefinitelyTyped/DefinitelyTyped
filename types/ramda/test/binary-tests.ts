import * as R from "ramda";

(() => {
    function takesThreeArgs(a: number, b: number, c: number) {
        return [a, b, c];
    }

    takesThreeArgs.length; // => 3
    takesThreeArgs(1, 2, 3); // => [1, 2, 3]

    const takesTwoArgs = R.binary(takesThreeArgs);
    takesTwoArgs.length; // => 2
    // Only 2 arguments are passed to the wrapped function
    // @ts-expect-error
    takesTwoArgs(1, 2, 3); // => [1, 2, undefined]
});

(() => {
    function takesOneArg(a: number) {
        return [a];
    }
    function takesTwoArgs(a: number, b: number) {
        return [a, b];
    }
    function takesThreeArgs(a: number, b: number, c: number) {
        return [a, b, c];
    }

    R.binary(takesOneArg); // $ExpectType (arg_0: number, arg_1: undefined) => number[]
    R.binary(takesTwoArgs); // $ExpectType (arg_0: number, arg_1: number) => number[] ||
    R.binary(takesThreeArgs); // $ExpectType (arg_0: number, arg_1: number) => number[]
});
