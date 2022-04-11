import * as R from 'ramda';

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
    function takesOneOrTwoArgs(a: number, b?: number) {
        return [a, b];
    }
    function takesTwoOrThreeArgs(a: number, b: number, c?: number) {
        return [a, b, c];
    }

    takesThreeArgs.length; // => 3
    takesThreeArgs(1, 2, 3); // => [1, 2, 3]

    // $ExpectError
    const takesTwoArgs2 = R.binary(takesThreeArgs);
    takesTwoArgs2.length; // => 2
    // Only 2 arguments are passed to the wrapped function
    // $ExpectError
    takesTwoArgs2(1, 2, 3); // => [1, 2, undefined]

    // $ExpectType (a: number, _: unknown) => number[]
    R.binary(takesOneArg);
    // $ExpectType (a: number, b: number) => number[]
    R.binary(takesTwoArgs);
    // Error since `undefined` is not assignable to `number`
    // $ExpectError
    R.binary(takesThreeArgs);
    // $ExpectType (a: number, b: number) => (number | undefined)[]
    R.binary(takesOneOrTwoArgs);
    // $ExpectType (a: number, b: number) => (number | undefined)[]
    R.binary(takesTwoOrThreeArgs);
    // $ExpectType (b: number, a: number) => (number | undefined)[]
    R.binary<[b: number, a: number], Array<number | undefined>>(takesTwoOrThreeArgs);
    // $ExpectType (b: number, a: number) => (number | undefined)[]
    R.binary<(b: number, a: number) => Array<number | undefined>>(takesTwoOrThreeArgs);
    // Crashes dtslint
    // // $ExpectError
    // R.binary<[a: number, b: number], number>(takesTwoOrThreeArgs);
};
