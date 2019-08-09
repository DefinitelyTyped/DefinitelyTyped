/* tslint:disable:use-default-type-parameter interface-name */

import { Test, C } from 'ts-toolbelt';

const {checks, check} = Test;

// ///////////////////////////////////////////////////////////////////////////////////////
// CLASS /////////////////////////////////////////////////////////////////////////////////

// ---------------------------------------------------------------------------------------
// INSTANCEOF

class TestClass {}

checks([
    check<C.InstanceOf<typeof TestClass>,   TestClass,          Test.Pass>(TestClass),
    check<C.InstanceOf<typeof TestClass>,   TestClass,          Test.Pass>(new TestClass()),
]);

// ---------------------------------------------------------------------------------------
// PROMISEOF

checks([
    check<C.PromiseOf<Promise<TestClass>>,  TestClass,  Test.Pass>(),
]);
