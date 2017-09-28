

function test_version() {
    var version: string = JsMockito.version;
}

// JsMockito.JsMockitoStubBuilder


function test_then() {
    new JsMockito.JsMockitoStubBuilder().then(function () {});
    new JsMockito.JsMockitoStubBuilder().then(function () {}, function () {}, function () {});
}

function test_thenReturn() {
    new JsMockito.JsMockitoStubBuilder().thenReturn(1);
    new JsMockito.JsMockitoStubBuilder().thenReturn("two", [3, 4], {5: 6}, function (seven: number) {return seven;});
}

function test_thenThrow() {
    new JsMockito.JsMockitoStubBuilder().thenThrow(new Error());
    new JsMockito.JsMockitoStubBuilder().thenThrow(new EvalError(), new RangeError(), new ReferenceError());
}

// JsMockito

function test_JsMockito_isMock() {
    var result = JsMockito.isMock(new TestClass());
}

function test_JsMockito_when() {
    JsMockito.when(new TestClass()).test().thenReturn(true);
}

function test_JsMockito_verify() {
    JsMockito.verify(new TestClass()).test();
    JsMockito.verify(new TestClass(), new TestVerifier()).test();
}

function test_JsMockito_verifyZeroInteractions() {
    JsMockito.verifyZeroInteractions(new TestClass());
    JsMockito.verifyZeroInteractions(new TestClass(), new TestClass(), new TestClass());
}

function test_JsMockito_verifyNoMoreInteractions() {
    JsMockito.verifyNoMoreInteractions(new TestClass());
    JsMockito.verifyNoMoreInteractions(new TestClass(), new TestClass(), new TestClass());
}

function test_JsMockito_spy() {
    var testClass = JsMockito.spy(new TestClass());
    testClass.test();
}

function test_JsMockito_mockFunction() {
    JsMockito.mockFunction()();
    JsMockito.mockFunction("name")();
    JsMockito.mockFunction("name", function() {})();
}

function test_JsMockito_mock() {
    JsMockito.mock(TestClass).test();
    JsMockito.mock(Array).push("one");
}

// JsMockito.Verifiers

function test_JsMockito_Verifiers_never() {
    JsMockito.verify(new TestClass(), JsMockito.Verifiers.never()).test();
}

function test_JsMockito_Verifiers_zeroInteractions() {
    JsMockito.verify(new TestClass(), JsMockito.Verifiers.zeroInteractions()).test();
}

function test_JsMockito_Verifiers_noMoreInteractions() {
    JsMockito.verify(new TestClass(), JsMockito.Verifiers.noMoreInteractions()).test();
}

function test_JsMockito_Verifiers_times() {
    JsMockito.verify(new TestClass(), JsMockito.Verifiers.times(1)).test();
}

function test_JsMockito_Verifiers_once() {
    JsMockito.verify(new TestClass(), JsMockito.Verifiers.once()).test();
}

// JsMockito.Integration

function test_JsMockito_Integration_importTo() {
    JsMockito.Integration.importTo(this);
}

function test_JsMockito_Integration_screwunit() {
    JsMockito.Integration.screwunit();
}

function test_JsMockito_Integration_JsTestDriver() {
    JsMockito.Integration.JsTestDriver();
}

function test_JsMockito_Integration_JsUnitTest() {
    JsMockito.Integration.JsUnitTest();
}

function test_JsMockito_Integration_YUITest() {
    JsMockito.Integration.YUITest();
}

function test_JsMockito_Integration_QUnit() {
    JsMockito.Integration.QUnit();
}

function test_JsMockito_Integration_jsUnity() {
    JsMockito.Integration.jsUnity();
}

function test_JsMockito_Integration_jSpec() {
    JsMockito.Integration.jSpec();
}

// Global Functions

function test_isMock() {
    var result = isMock(new TestClass());
}

function test_when() {
    when(new TestClass()).test().thenReturn(true);
}

function test_verify() {
    verify(new TestClass()).test();
    verify(new TestClass(), new TestVerifier()).test();
}

function test_verifyZeroInteractions() {
    verifyZeroInteractions(new TestClass());
    verifyZeroInteractions(new TestClass(), new TestClass(), new TestClass());
}

function test_verifyNoMoreInteractions() {
    verifyNoMoreInteractions(new TestClass());
    verifyNoMoreInteractions(new TestClass(), new TestClass(), new TestClass());
}

function test_spy() {
    var testClass = spy(new TestClass());
    testClass.test();

    var array = spy([]);
    array.push("one");
}

function test_mockFunction() {
    mockFunction()();
    mockFunction("name")();
    mockFunction("name", function() {})();
}

function test_mock() {
    var testClass = mock(TestClass);
    testClass.test();

    var array = mock(Array);
    array.push("one");
}

function test_never() {
    verify(new TestClass(), never()).test();
}

function test_zeroInteractions() {
    verify(new TestClass(), zeroInteractions()).test();
}

function test_noMoreInteractions() {
    verify(new TestClass(), noMoreInteractions()).test();
}

function test_times() {
    verify(new TestClass(), times(1)).test();
}

function test_once() {
    verify(new TestClass(), once()).test();
}

// Test Definitions

declare class TestClass {
    test(): any;
}

declare class TestVerifier implements JsMockito.Verifier {

}
