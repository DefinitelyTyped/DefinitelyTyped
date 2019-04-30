// tslint:disable-next-line no-namespace
namespace TestNamespace {
    export interface TestType {
        prop: string;
    }
}

class TestClass {
    prop: string;
}

// nameof tests
nameof(TestClass); // $ExpectType string
nameof<TestNamespace.TestType>(); // $ExpectType string
nameof<TestClass>(t => t.prop); // $ExpectType string

// nameof.full tests
const testInstance = new TestClass();
nameof.full(testInstance.prop); // $ExpectType string
nameof.full(testInstance.prop, 1); // $ExpectType string
nameof.full<TestNamespace.TestType>(); // $ExpectType string
nameof.full<TestNamespace.TestType>(1); // $ExpectType string
nameof.full<TestClass>(t => t.prop); // $ExpectType string
nameof.full<TestClass>(t => t.prop, 1); // $ExpectType string

// reference type test
const myObj = { test: "" };
nameof(myObj); // $ExpectType string
nameof.full(myObj); // $ExpectType string

// primitive type test
const myStr = "";
nameof(myStr); // $ExpectType string
nameof.full(myStr); // $ExpectType string

// null test
const nullTypedVar = null;
nameof(nullTypedVar); // $ExpectType string
nameof.full(nullTypedVar); // $ExpectType string

// undefined test
const undefinedTypedVar = undefined;
nameof(undefinedTypedVar); // $ExpectType string
nameof.full(undefinedTypedVar); // $ExpectType string
