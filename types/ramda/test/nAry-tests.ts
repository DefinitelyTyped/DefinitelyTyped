import * as R from 'ramda';

() => {
    function takesNoArg() {
        return true;
    }
    function takesOneArg(a: number) {
        return [a];
    }
    function takesTwoArgs(a: number, b: number) {
        return [a, b];
    }
    function takesThreeArgs(a: number, b: number, c: number) {
        return [a, b, c];
    }
    function takesOneOrMoreArgs(a: number, ...args: number[]) {
        return [a, ...args];
    }

    function overloaded(sole: number): [number];
    function overloaded(a: number, b: number): [number, number];
    function overloaded(...args: [sole: number] | [a: number, b: number]): [number] | [number, number] {
        return args;
    }

    function reverseOverloaded(a: number, b: number): [number, number];
    function reverseOverloaded(sole: number): [number];
    function reverseOverloaded(...args: [sole: number] | [a: number, b: number]): [number] | [number, number] {
        return args;
    }

    function genericOverloaded(sole: number): [number];
    function genericOverloaded(a: number, b: number): [number, number];
    function genericOverloaded<T extends [sole: number] | [a: number, b: number]>(...args: T): T;
    function genericOverloaded(...args: [sole: number] | [a: number, b: number]): [number] | [number, number] {
        return args;
    }

    R.nAry(0);
    // Error since `undefined` is not assignable to `number`
    // $ExpectType () => boolean
    R.nAry(0, takesNoArg);
    // $ExpectError
    R.nAry(0, takesOneArg);
    // $ExpectError
    R.nAry(1, takesTwoArgs);
    // $ExpectError
    R.nAry(2, takesThreeArgs);
    // $ExpectType (a: number, _: unknown) => number[]
    R.nAry(2, takesOneArg);
    // this should be (a: number, arg_0: number) => number[]
    // $ExpectError
    R.nAry(2, takesOneOrMoreArgs);
    // $ExpectType (a: number, _: unknown, _: unknown, _: unknown) => number[]
    R.nAry(4, takesOneArg);
    // $ExpectType (a: number, b: number, c: number, _: unknown) => number[]
    R.nAry(4, takesThreeArgs);

    // $ExpectType (a: number, b: number) => [number, number]
    R.nAry(2, overloaded);
    // $ExpectType (sole: number) => [number]
    R.nAry(1, reverseOverloaded);
    // do not currently work:
    // this should be (sole: number) => [number]
    // $ExpectError
    R.nAry(1, overloaded);
    // should be (a: number, b: number) => [number, number]
    R.nAry(2, reverseOverloaded);
    // should be (a: number, b: number) => [number, number]
    R.nAry(2, genericOverloaded);
    // should be (sole: number) => [number]
    R.nAry(1, genericOverloaded);
};
