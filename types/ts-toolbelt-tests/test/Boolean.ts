/* tslint:disable:use-default-type-parameter interface-name */

import { Test, B } from 'ts-toolbelt';

const {checks, check} = Test;

// ///////////////////////////////////////////////////////////////////////////////////////
// BOOLEAN ///////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// AND

checks([
    check<B.And<B.True, B.True>,            1,          Test.Pass>(1 && 1),
    check<B.And<B.True, B.False>,           0,          Test.Pass>(1 && 0),
    check<B.And<B.False, B.True>,           0,          Test.Pass>(0 && 1),
    check<B.And<B.False, B.False>,          0,          Test.Pass>(0 && 0),
    check<B.And<B.Boolean, B.False>,        0,          Test.Pass>(),
    check<B.And<B.False, B.Boolean>,        0,          Test.Pass>(),
    check<B.And<B.Boolean, B.True>,         0 | 1,      Test.Pass>(),
    check<B.And<B.True, B.Boolean>,         0 | 1,      Test.Pass>(),
    check<B.And<B.Boolean, B.Boolean>,      0 | 1,      Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// TRUE, FALSE, BOOLEAN

checks([
    check<B.True,       1,          Test.Pass>(),
    check<B.False,      0,          Test.Pass>(),
    check<B.Boolean,    0 | 1,      Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// BOOLEANOF

checks([
    check<B.BooleanOf<true>,            1,          Test.Pass>(),
    check<B.BooleanOf<false>,           0,          Test.Pass>(),
    check<B.BooleanOf<false | true>,    0 | 1,      Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// FORMAT

checks([
    check<B.Format<B.True, 'b'>,            true,               Test.Pass>(),
    check<B.Format<B.False, 'b'>,           false,              Test.Pass>(),
    check<B.Format<B.False | B.True, 'b'>,  boolean,            Test.Pass>(),

    check<B.Format<B.True, 's'>,            'true',             Test.Pass>(),
    check<B.Format<B.False, 's'>,           'false',            Test.Pass>(),
    check<B.Format<B.False | B.True, 's'>,  'false' | 'true',   Test.Pass>(),

    check<B.Format<B.True, 'b' | 's'>,      'true' | true,      Test.Pass>(),
    check<B.Format<B.False, 'b' | 's'>,     'false' | false,    Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// NOT

checks([
    check<B.Not<B.True>,                0,          Test.Pass>(),
    check<B.Not<B.False>,               1,          Test.Pass>(),
    check<B.Not<B.True | B.False>,      1 | 0,      Test.Pass>(),
    check<B.Not<B.True | B.False>,      0 | 1,      Test.Pass>(),
    check<B.Not<B.Boolean>,             0 | 1,      Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// OR

checks([
    check<B.Or<B.True, B.True>,         1,          Test.Pass>(1 || 1),
    check<B.Or<B.True, B.False>,        1,          Test.Pass>(1 || 0),
    check<B.Or<B.False, B.True>,        1,          Test.Pass>(0 || 1),
    check<B.Or<B.False, B.False>,       0,          Test.Pass>(0 || 0),
    check<B.Or<B.Boolean, B.True>,      1,          Test.Pass>(),
    check<B.Or<B.True, B.Boolean>,      1,          Test.Pass>(),
    check<B.Or<B.Boolean, B.False>,     0 | 1,      Test.Pass>(),
    check<B.Or<B.False, B.Boolean>,     0 | 1,      Test.Pass>(),
    check<B.Or<B.Boolean, B.Boolean>,   0 | 1,      Test.Pass>(),
]);

// ---------------------------------------------------------------------------------------
// XOR

checks([
    check<B.Xor<B.True, B.True>,            0,          Test.Pass>(),
    check<B.Xor<B.True, B.False>,           1,          Test.Pass>(),
    check<B.Xor<B.False, B.True>,           1,          Test.Pass>(),
    check<B.Xor<B.False, B.False>,          0,          Test.Pass>(),
    check<B.Xor<B.Boolean, B.True>,         0 | 1,      Test.Pass>(),
    check<B.Xor<B.True, B.Boolean>,         0 | 1,      Test.Pass>(),
    check<B.Xor<B.Boolean, B.False>,        0 | 1,      Test.Pass>(),
    check<B.Xor<B.False, B.Boolean>,        0 | 1,      Test.Pass>(),
    check<B.Xor<B.Boolean, B.Boolean>,      0 | 1,      Test.Pass>(),
]);
