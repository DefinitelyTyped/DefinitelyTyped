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
        (_err, x, y) => x * y,
    )(6, 7);

    R.tryCatch((x: string) => +x, Number)('8');

    // string cannot be assigned to number
    R.tryCatch(
        (x: number) => x + 1,
        err => err,
    )('string'); // $ExpectError

    // one argument is a string
    R.tryCatch(
        (x: number, y: number) => x + y,
        (_err, x, y) => x * y,
    )(
        5,
        '6' // $ExpectError
    );

    // no arguments allowed if argument type is never
    R.tryCatch(
        () => 1,
        () => 2,
    )(12); // $ExpectError

    // With currying

    R.tryCatch((x: number) => x + 1)(err => err)(2); // $ExpectType unknown
    R.tryCatch((x: number) => x + 1)((_err, x) => x)(2); // $ExpectType number

    R.tryCatch((x: number) => x, R.F); // $ExpectType (() => false) | ((x: number) => number)
    R.tryCatch((x: number) => x)(R.F); // $ExpectType ((x: number) => number) | (() => false)

    /* Catcher type inference */

    // $ExpectType number
    R.tryCatch(
        (_x: number) => 1,
        (_err, x) => x * x,
    )(12);

    // $ExpectType string | number
    R.tryCatch((x: number) => 1)((_err, x) => x.toString())(12);

    // $ExpectType number | Error
    R.tryCatch(
        (_x: number) => 1,
        (err: Error, _x) => err,
    )(12);

    // $ExpectType number | Error
    R.tryCatch((x: number) => 1)((err: Error, _x) => err)(12);

    /* Generic functions */

    const f1 = R.tryCatch(<T>(x: T) => x, R.F); // $ExpectType (() => false) | (<T>(x: T) => T)

    // $ExpectType false | "foobar"
    f1('foobar');
    // $ExpectType false | {}
    f1({});

    // $ExpectType false | 123
    R.tryCatch(<T extends string | number>(x: T) => x, R.F)(123);
    // $ExpectType false | "asdf"
    R.tryCatch(<T extends string | number>(x: T) => x, R.F)('asdf');
    // $ExpectError
    R.tryCatch(<T extends string | number>(x: T) => x, R.F)(null);

    // $ExpectType boolean
    R.tryCatch(R.and, R.F)(true, true);
    // $ExpectType boolean
    R.tryCatch(R.and)(R.F)(true, true);

    // Generic function tryer inference
    // $ExpectType 123
    R.tryCatch(
        <T extends string | number>(x: T) => x,
        // $ExpectType (_err: unknown, x: string | number) => string | number
        (_err, x) => x,
    )(123);

    // $ExpectType boolean
    R.tryCatch(R.prop('x'), R.F)({ x: true });
    // $ExpectType boolean
    R.tryCatch(R.prop<'x', true>('x'), R.F)({ x: true });
    // $ExpectType number | false
    R.tryCatch(R.prop('x'), R.F)({ x: 13 });
    // $ExpectType number | false
    R.tryCatch(R.prop('x'))(R.F)({ x: 13 });
    // $ExpectError
    R.tryCatch(R.prop('x'), R.F)(null);
    // $ExpectError
    R.tryCatch(R.prop('x'), R.F)(null);

    // Curried generic tryer

    // $ExpectType (() => "some-error") | (<Y>(y: Y) => { x: "arg"; y: Y; })
    const gtf = R.tryCatch(
        <X>(x: X) =>
            <Y>(y: Y) => ({ x, y }),
        () => () => 'some-error' as const,
    )('arg' as const);

    gtf('arg2' as const); // $ExpectType "some-error" | { x: "arg"; y: "arg2"; }

    // $ExpectType ((b: boolean) => boolean) | undefined
    R.tryCatch(R.and, R.always(undefined))(true);
    // $ExpectType ((b: string) => string) | undefined
    R.tryCatch(R.and, R.always(undefined))('foo');
};
