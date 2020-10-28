import * as R from 'ramda';

() => {
  const a: boolean = R.tryCatch<boolean>(R.prop('x'), R.F)({ x: true }); // => true
  const a1: boolean = R.tryCatch(R.prop<'x', true>('x'), R.F)({ x: true }); // => true
  const b: boolean = R.tryCatch<boolean>(R.prop('x'), R.F)(null); // => false
  const c: boolean = R.tryCatch<boolean>(R.and, R.F)(true, true); // => true

    /* test that type safety is increased when a second type argument is supplied */

    const d: number = R.tryCatch<number, number>(
        x => x + 1,
        x => x,
    )(6);
    const e: number = R.tryCatch<number, number>(
        (x, y) => x + y,
        (x, y) => x * y,
    )(6, 7);
    const f: number = R.tryCatch<number, string>(x => +x, Number)('8');

    // string cannot be assigned to number
    const g = R.tryCatch<number, number>(
        x => x + 1,
        x => x,
    )('string'); // $ExpectError

    // number cannot be assigned to boolean (in the catcher)
    const h = R.tryCatch<boolean, number>(
        x => x < 0,
        x => x, // $ExpectError
    )(5);

    // one argument is a string
    const i: number = R.tryCatch<number, number>(
        (x, y) => x + y,
        (x, y) => x * y,
    )(5, '6'); // $ExpectError

    // no arguments allowed if argument type is never
    const j: number = R.tryCatch<number, never>(
        () => 1,
        () => 2,
    )(12); // $ExpectError

    /* testing currying */

    const k: number = R.tryCatch<number, number>(x => x + 1)(x => x)(2);
    const l: boolean = R.tryCatch<boolean>(R.T)(R.F)(true);
};
