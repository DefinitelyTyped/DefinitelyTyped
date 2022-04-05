import * as R from 'ramda';

() => {
    const addFour = (a: number) => (b: number) => (c: number) => (d: number) => a + b + c + d;
    // $ExpectType (a: number, b: number, c: number, d: number) => number
    const uncurriedAddFour = R.uncurryN(4, addFour);
    // $ExpectType number
    uncurriedAddFour(1, 2, 3, 4); // => 10
    // $ExpectType (a: number, b: number) => (c: number) => (d: number) => number
    R.uncurryN(2, addFour);
    // $ExpectError
    R.uncurryN(5, addFour);
    // $ExpectType (e: number, f: number, g: number, h: number) => number
    R.uncurryN<[e: number, f: number, g: number, h: number], number>(4, addFour);
    // $ExpectType (e: number, f: number) => (g: number) => (h: number) => number
    R.uncurryN<[e: number, f: number], (g: number) => (h: number) => number>(2, addFour);
    // $ExpectError
    R.uncurryN<[e: number, f: number, g: number, h: number], number>(2, addFour);
    // $ExpectError
    R.uncurryN<[e: number, f: number, g: number, h: number, i: number], number>(5, addFour);
};
