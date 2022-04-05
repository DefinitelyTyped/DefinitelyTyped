import * as R from 'ramda';

() => {
    function addFourNumbers(a: number, b: number, c: number, d: number): number {
        return a + b + c + d;
    }
    function addThreeOrFourNumbers(a: number, b: number, c: number, d?: number): number {
        return a + b + c + (d || 0);
    }

    // $ExpectType (d: number) => number
    R.curryN(3)(addFourNumbers)(1, 2, 3);
    // $ExpectType (d: number) => number
    R.curryN(3, addFourNumbers)(1, 2, 3);

    // $ExpectType (d: number) => number
    R.curryN(3)(addFourNumbers)(1, 2)(3);
    // $ExpectType (d: number) => number
    R.curryN(3, addFourNumbers)(1, 2)(3);

    // $ExpectType (d: number) => number
    R.curryN(3)(addFourNumbers)(1)(2, 3);
    // $ExpectType (d: number) => number
    R.curryN(3, addFourNumbers)(1)(2, 3);

    // $ExpectType (d: number) => number
    R.curryN(3)(addFourNumbers)(1)(2)(3);
    // $ExpectType (d: number) => number
    R.curryN(3, addFourNumbers)(1)(2)(3);

    // $ExpectError
    R.curryN(1)(addFourNumbers)(1)(2, 3);
    // $ExpectType number
    R.curryN(1)(addFourNumbers)(1)(2, 3, 4);
    // $ExpectType number
    R.curryN(1)(addThreeOrFourNumbers)(1)(2, 3, 4);
    // $ExpectType number
    R.curryN(1)(addThreeOrFourNumbers)(1)(2, 3);

    function overloaded(sole: number): [number];
    function overloaded(a: number, b: number, c: number): [number, number, number];
    function overloaded(...args: [sole: number] | [a: number, b: number, c: number]): [number] | [number, number, number] {
        return args;
    }
    // The last overload is always picked, oh well
    // $ExpectType [number, number, number]
    R.curryN(1)(overloaded)(1)(2, 3);
    // $ExpectError
    R.curryN(1)(overloaded)(1)(2)(3);
    // $ExpectType (c: number) => [number, number, number]
    R.curryN(2)(overloaded)(1)(2);
};
