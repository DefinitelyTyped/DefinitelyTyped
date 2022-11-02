import * as R from 'ramda';

() => {
    /* Type inference when catcher is typed */
    R.tryCatch((x: number) => x, R.F)(5); // $ExpectType number | false

    R.tryCatch(
        (x: number) => x + 1,
        err => err,
    )(6);

    R.tryCatch(
        (x: number, y: number) => x + y,
        (err, x, y) => x * y,
    )(6, 7);

    R.tryCatch((x: string) => +x, Number)('8');

    // string cannot be assigned to number
    R.tryCatch(
        (x: number) => x + 1,
        err => err,
    // @ts-expect-error
    )('string');

    // one argument is a string
    R.tryCatch(
        (x: number, y: number) => x + y,
        (err, x, y) => x * y,
    // @ts-expect-error
    )(5, '6');

    // no arguments allowed if argument type is never
    R.tryCatch(
        () => 1,
        () => 2,
    // @ts-expect-error
    )(12);

    // With currying

    R.tryCatch((x: number) => x + 1)(err => err)(2); // $ExpectType unknown
    R.tryCatch((x: number) => x + 1)((err, x) => x)(2); // $ExpectType number

    R.tryCatch((x: number) => x, R.F); // $ExpectType (() => false) | ((x: number) => number)
    R.tryCatch((x: number) => x)(R.F); // $ExpectType ((x: number) => number) | (() => false)

    /* Catcher type inference */

    // $ExpectType number
    R.tryCatch(
        (x: number) => 1,
        (err, x) => x * x,
    )(12);

    // $ExpectType string | number
    R.tryCatch((x: number) => 1)((err, x) => x.toString())(12);

    // $ExpectType number | Error
    R.tryCatch(
        (x: number) => 1,
        (err: Error, x) => err,
    )(12);

    // $ExpectType number | Error
    R.tryCatch((x: number) => 1)((err: Error, x) => err)(12);

    /* Generic functions */

    const f1 = R.tryCatch(<T>(x: T) => x, R.F); // $ExpectType (() => false) | (<T>(x: T) => T)

    f1('foobar'); // $ExpectType false | "foobar"
    f1({}); // $ExpectType false | {}

    R.tryCatch(<T extends string | number>(x: T) => x, R.F)(123); // $ExpectType false | 123
    R.tryCatch(<T extends string | number>(x: T) => x, R.F)('asdf'); // $ExpectType false | "asdf"
    // @ts-expect-error
    R.tryCatch(<T extends string | number>(x: T) => x, R.F)(null);

    R.tryCatch(R.and, R.F)(true, true); // $ExpectType boolean
    R.tryCatch(R.and)(R.F)(true, true); // $ExpectType boolean

    // Generic function tryer inference
    R.tryCatch(
        <T extends string | number>(x: T) => x,
        (err, x) => x, // $ExpectType (err: unknown, x: string | number) => string | number
    )(123); // $ExpectType 123

    R.tryCatch(R.prop('x'), R.F)({ x: true }); // $ExpectType boolean
    R.tryCatch(R.prop<'x', true>('x'), R.F)({ x: true }); // $ExpectType boolean
    R.tryCatch(R.prop('x'), R.F)({ x: 13 }); // $ExpectType number | false
    R.tryCatch(R.prop('x'))(R.F)({ x: 13 }); // $ExpectType number | false
    R.tryCatch(R.prop('x'), R.F)(null); // $ExpectType false | undefined
    R.tryCatch(R.prop('x'), R.F)(null); // $ExpectType false | undefined

    // Curried generic tryer

    // $ExpectType (() => "some-error") | (<Y>(y: Y) => { x: "arg"; y: Y; })
    const gtf = R.tryCatch(
        <X>(x: X) =>
            <Y>(y: Y) => ({ x, y }),
        () => () => 'some-error' as const,
    )('arg' as const);

    gtf('arg2' as const); // $ExpectType "some-error" | { x: "arg"; y: "arg2"; }

    R.tryCatch(R.and, R.always(undefined))(true); // $ExpectType (<U>(b: U) => boolean | U) | undefined
};
