import * as R from 'ramda';

() => {
    function square(value: number) {
        return value * value;
    }

    function add(x: number, y: number) {
        return x + y;
    }

    function add3(x: number, y: number, z: number) {
        return x + y + z;
    }

    // $ExpectType (args_0: number, args_1: number) => number
    const squareThenAdd = R.useWith(add, [square, square]);

    // @ts-expect-error
    const addNothing = R.useWith(add, []);

    // @ts-expect-error
    const fnIncorrectArity = R.useWith(add, [square, square, square]);

    // @ts-expect-error
    const fnIncorrectType = R.useWith(add, [square, R.toString]);

    // $ExpectType (args_0: number, args_1: number, args_2: number) => number
    const squareThenAdd3 = R.useWith(add3, [square, square, square]);

    function add11(
        a: number,
        b: number,
        c: number,
        d: number,
        e: number,
        f: number,
        g: number,
        h: number,
        i: number,
        j: number,
        k: number,
    ) {
        return a + b + c + d + e + f + g + h + i + j + k;
    }

    const squareThenAdd11: (
        args_0: number,
        args_1: number,
        args_2: number,
        args_3: number,
        args_4: number,
        args_5: number,
        args_6: number,
        args_7: number,
        args_8: number,
        args_9: number,
        args_10: number,
    ) => number = R.useWith(add11, [
        square,
        square,
        square,
        square,
        square,
        square,
        square,
        square,
        square,
        square,
        square,
    ]);
};
