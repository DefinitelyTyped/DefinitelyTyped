import * as R from 'ramda';

() => {
    function takesNoArgs() {
        return [];
    }
    function takesOneArg(aa: number) {
        return [aa];
    }
    function takesTwoArgs(aa: number, bb: number) {
        return [aa, bb];
    }
    function takesThreeArgs(aa: number, bb: number, cc: number) {
        return [aa, bb, cc];
    }
    function takesOneOrTwoArgs(a: number, b?: number) {
        return [a, b];
    }
    function takesTwoOrThreeArgs(a: number, b: number, c?: number) {
        return [a, b, c];
    }

    // $ExpectType (_: unknown) => never[]
    R.unary(takesNoArgs);
    // $ExpectType (aa: number) => number[]
    R.unary(takesOneArg);
    // Error since `undefined` is not assignable to `number`
    // $ExpectError
    R.unary(takesTwoArgs);
    // $ExpectError
    R.unary(takesThreeArgs);
    // This is already a unary function:
    // $ExpectType (aa: number) => number[]
    const takesZeroOrOneArgs = 1 > 0 ? takesNoArgs : takesOneArg;
    // $ExpectType (aa: number) => number[]
    R.unary(takesZeroOrOneArgs);
    // $ExpectType (a: number) => (number | undefined)[]
    R.unary(takesOneOrTwoArgs);
    // $ExpectType (b: number) => (number | undefined)[]
    R.unary<[b: number], Array<number | undefined>>(takesOneOrTwoArgs);
    // $ExpectType (b: number) => (number | undefined)[]
    R.unary<(b: number) => Array<number | undefined>>(takesOneOrTwoArgs);
    // $ExpectError
    R.unary(takesTwoOrThreeArgs);
};
