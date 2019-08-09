/* tslint:disable:use-default-type-parameter interface-name */

import { Test, F, A } from 'ts-toolbelt';

const {checks, check} = Test;

// ///////////////////////////////////////////////////////////////////////////////////////
// FUNCTION //////////////////////////////////////////////////////////////////////////////

const FN = (a: string, b: number, c: object) => true;

// ---------------------------------------------------------------------------------------
// ARROW

checks([
    check<F.Function<[string, number, object], boolean>,   typeof FN,  Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// COMPOSE

declare function compose<Fns extends F.Function[]>(...args: F.Composer<Fns>): F.Compose<Fns>;

const composed = compose(
    (message: string)                   => false,                   // receive previous return
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (name: string, age: number)         => ({name, age}),           // receive parameters
);

checks([
    check<(typeof composed),    (name: string, age: number) => boolean,  Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// CURRY

// Not testable
declare function curry<Fn extends F.Function>(f: Fn): F.Curry<Fn>;

// tslint:disable-next-line
const __ = {} as A.x

const toCurry = (name: string, age: number, single: true, ...nicknames: string[]) => true;
const curried = curry(toCurry);

const t = curried();

const test00 = curried(__, 26)(__, true, 'JJ', __)('Jane', 'Jini'); // boolean
const test01 = curried('Jane', 26, true, __)('JJ', __)('Jini');     // boolean

checks([
    check<typeof test00,        boolean,                                Test.Pass>(),
    check<typeof test01,        boolean,                                Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// PARAMETERS

checks([
    check<F.Parameters<typeof FN>,    [string, number, object],   Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// LENGTH

checks([
    check<F.Length<typeof FN>,                          3,          Test.Pass>(),
    check<F.Length<(a1: any, a2?: any) => any>,         1 | 2,      Test.Pass>(),
    check<F.Length<(a1: any, a2?: any) => any, 's'>,    '1' | '2',  Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// PIPE

declare function pipe<Fns extends F.Function[]>(...args: F.Piper<Fns>): F.Pipe<Fns>;

const piped = pipe(
    (name: string, age: number)         => ({name, age}),           // receive parameters
    (info: {name: string, age: number}) => `Welcome, ${info.name}`, // receive previous return
    (message: string)                   => false,                   // receive previous return
);

checks([
    check<(typeof piped),   (name: string, age: number) => boolean,  Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// RETURN

checks([
    check<F.Return<typeof FN>,    boolean,    Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// UNCURRY

// checks([
//     check<F.UnCurry<typeof curried>,    typeof FN,  Test.Pass>(),
// ])
