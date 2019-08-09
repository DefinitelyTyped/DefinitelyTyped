/* tslint:disable:use-default-type-parameter interface-name */

import { Test, I } from 'ts-toolbelt';

const {checks, check} = Test;

// ///////////////////////////////////////////////////////////////////////////////////////
// ITERATION /////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// FORMAT

checks([
    check<I.Format<I.IterationOf<'32' | '12'>, 'n'>,   32 | 12,        Test.Pass>(),
    check<I.Format<I.IterationOf<'32' | '12'>, 's'>,   '32' | '12',    Test.Pass>(),

    check<I.Format<I.IterationOf<'32'>, 'n'>,  32,     Test.Pass>(),
    check<I.Format<I.IterationOf<'32'>, 's'>,  '32',   Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// ITERATION

// Cannot be tested

// ---------------------------------------------------------------------------------------
// ITERATIONOF

checks([
    check<I.IterationOf<'3' | '4'>, ['2', '4', '3', 3, '+'] | ['3', '5', '4', 4, '+'],  Test.Pass>(),
    check<I.IterationOf<'3'>,       ['2', '4', '3', 3, '+'],                            Test.Pass>(),
    check<I.IterationOf<string>,    ['__', '__', string, number, '-' | '0' | '+'],      Test.Pass>(),
    check<I.IterationOf<'100'>,     ['__', '__', string, number, '-' | '0' | '+'],      Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// KEY

checks([
    check<I.Key<I.IterationOf<'3' | '4'>>,  '3' | '4',  Test.Pass>(),
    check<I.Key<I.IterationOf<'3'>>,        '3',        Test.Pass>(),
    check<I.Key<I.IterationOf<'-4'>>,       '-4',       Test.Pass>(),
    check<I.Key<I.IterationOf<'-100'>>,     string,     Test.Pass>(),
    check<I.Key<I.IterationOf<'100'>>,      string,     Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// NEXT

checks([
    check<I.Next<I.IterationOf<'3' | '4'>>, ['3', '5', '4', 4, '+'] | ['4', '6', '5', 5, '+'],  Test.Pass>(),
    check<I.Next<I.IterationOf<'3'>>,       ['3', '5', '4', 4, '+'],                            Test.Pass>(),
    check<I.Next<I.IterationOf<'-40'>>,     ['-40', '-38', '-39', -39, '-'],                    Test.Pass>(),
    check<I.Next<I.IterationOf<'40'>>,      ['__', '__', string, number, '-' | '0' | '+'],      Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// POS

checks([
    check<I.Pos<I.IterationOf<'3' | '4'>>,  3 | 4,  Test.Pass>(),
    check<I.Pos<I.IterationOf<'3'>>,        3,      Test.Pass>(),
    check<I.Pos<I.IterationOf<'-4'>>,       -4,     Test.Pass>(),
    check<I.Pos<I.IterationOf<'-100'>>,     number, Test.Pass>(),
    check<I.Pos<I.IterationOf<'100'>>,      number, Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// PREV

checks([
    check<I.Prev<I.IterationOf<'3' | '4'>>, ['1', '3', '2', 2, '+'] | ['2', '4', '3', 3, '+'],  Test.Pass>(),
    check<I.Prev<I.IterationOf<'3'>>,       ['1', '3', '2', 2, '+'],                            Test.Pass>(),
    check<I.Prev<I.IterationOf<'30'>>,      ['28', '30', '29', 29, '+'],                        Test.Pass>(),
    check<I.Prev<I.IterationOf<'-40'>>,     ['__', '__', string, number, '-' | '0' | '+'],      Test.Pass>(),
]);
