// tslint:disable-next-line no-namespace
namespace TestNamespace {
    export interface TestType {
        prop: string;
    }
}

class TestClass {
    prop1 = "";
    prop2 = "";
}

// nameof tests
nameof(TestClass); // $ExpectType string
nameof<TestNamespace.TestType>(); // $ExpectType string
nameof<TestClass>(t => t.prop1); // $ExpectType string

// nameof.full tests
const testInstance = new TestClass();
nameof.full(testInstance.prop1); // $ExpectType string
nameof.full(testInstance.prop1, 1); // $ExpectType string
nameof.full<TestNamespace.TestType>(); // $ExpectType string
nameof.full<TestNamespace.TestType>(1); // $ExpectType string
nameof.full<TestClass>(t => t.prop1); // $ExpectType string
nameof.full<TestClass>(t => t.prop1, 1); // $ExpectType string

// nameof.toArray tests
nameof.toArray(testInstance.prop1); // $ExpectType string[]
nameof.toArray(testInstance.prop1, testInstance.prop2); // $ExpectType string[]
nameof.toArray<TestClass>(t => [t.prop1]); // $ExpectType string[]

// nameof.split tests
nameof.split(testInstance.prop1); // $ExpectType string[]
nameof.split(testInstance.prop1, 1); // $ExpectType string[]
nameof.split<TestClass>(obj => obj.prop1); // $ExpectType string[]
nameof.split<TestClass>(obj => obj.prop1, 1); // $ExpectType string[]

// nameof.interpolate tests
nameof.interpolate("" as string); // $ExpectType string

// reference type test
const myObj = { test: "" };
nameof(myObj); // $ExpectType string
nameof.full(myObj); // $ExpectType string
nameof.toArray(myObj); // $ExpectType string[]

// primitive type test
const myStr = "";
nameof(myStr); // $ExpectType string
nameof.full(myStr); // $ExpectType string
nameof.toArray(myStr); // $ExpectType string[]

// null test
const nullTypedVar = null;
nameof(nullTypedVar); // $ExpectType string
nameof.full(nullTypedVar); // $ExpectType string
nameof.toArray(nullTypedVar); // $ExpectType string[]

// undefined test
const undefinedTypedVar = undefined;
nameof(undefinedTypedVar); // $ExpectType string
nameof.full(undefinedTypedVar); // $ExpectType string
nameof.toArray(undefinedTypedVar); // $ExpectType string[]
