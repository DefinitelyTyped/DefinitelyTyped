import sinon = require("sinon");

function once(fn: Function) {
    var returnValue: any, called = false;
    return function () {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

function testOne() {
    var callback = sinon.spy();
    var proxy = once(callback);
    proxy();
    if (callback.calledOnce) { console.log("test1 calledOnce success"); } else { console.log("test1 calledOnce failure"); }
}

function testTwo() {
    var callback = sinon.spy(() => {});
    var proxy = once(callback);
    proxy();
    proxy();
    if (callback.calledOnce) { console.log("test2 calledOnce success"); } else { console.log("test2 calledOnce failure"); }
}

function testThree() {
    var obj = { thisObj: true };
    var callback = sinon.spy({}, "method");
    var proxy = once(callback);
    proxy.call(obj, callback, 1, 2, 3);
    if (callback.calledOn(obj)) { console.log("test3 calledOn success"); } else { console.log("test3 calledOn failure"); }
    if (callback.calledWith(callback, 1, 2, 3)) { console.log("test3 calledWith success"); } else { console.log("test3 calledWith failure"); }
}

function testFour() {
    var callback = sinon.stub().returns(42);
    var proxy = once(callback);
    var val = proxy.apply(callback, [1, 2, 3]);
    if (val === 42) { console.log("test4 returns success"); } else { console.log("test4 returns failure"); }
}

function testFive() {
    var callback = sinon.stub().returnsArg(1);
    var proxy = once(callback);
    var val = proxy.apply(callback, [1, 2, 3]);
    if (val === 2) { console.log("test5 returnsArg success"); } else { console.log("test5 returnsArg failure"); }
}

var objectUnderTest: any = {
    process: (obj: any) => {
        // It doesn't really matter what's here because the stub is going to replace this function
        return obj.success(99);
    }
};

function testSix() {
    var stub = sinon.stub(objectUnderTest, "process").yieldsTo("success");
    objectUnderTest.process({
        success: () => { console.log("test6 yieldsTo success"); },
        failure: () => { console.log("test6 yieldsTo failure"); }
    });
    stub.restore();
}

function testSeven() {
    var obj = { functionToTest : () => { } };
    var mockObj = sinon.mock(obj);
    obj.functionToTest();
    mockObj.expects('functionToTest').once();
}

function testEight() {
    sinon.match.typeOf("object").and(sinon.match.has("pages"));
}

function testNine() {
	var callback = sinon.stub().returns(42);
	callback({ x: 5, y: 5 });
	callback.calledWithMatch({ x: 5 });
	callback.alwaysCalledWithMatch({ y: 5 });
	callback.neverCalledWithMatch({ x: 6 });
	callback.notCalledWithMatch({ x: 6 });
	sinon.assert.calledWithMatch(callback, { x: 5 });
	sinon.assert.alwaysCalledWithMatch(callback, { y: 5 });
	sinon.assert.neverCalledWithMatch(callback, { x: 6 });
}

function testSandbox() {
    var sandbox = sinon.sandbox.create();
    if (sandbox.spy().called) {
        sandbox.stub(objectUnderTest, "process").yieldsTo("success");
        sandbox.mock(objectUnderTest).expects("process").once();
    }
    sandbox.useFakeTimers();
    sandbox.useFakeXMLHttpRequest();
    sandbox.useFakeServer();
    sandbox.restore();
}

function testPromises() {
    var resolveStub = sinon.stub().resolves(10);
    var rejectStub1 = sinon.stub().rejects();
    var rejectsStub2 = sinon.stub().rejects(new Error('Specified error'));
    var rejectsStub2 = sinon.stub().rejects("TypeError");
}

function testSymbolMatch() {
    var stub = sinon.stub();
    stub(Symbol('TestSymbol'));
    stub.calledWithMatch(sinon.match.symbol);
}

function testResetHistory() {
    sinon.stub().resetHistory();
}

testOne();
testTwo();
testThree();
testFour();
testFive();
testSix();
testSeven();
testEight();
testNine();
testPromises();
testSymbolMatch();
testResetHistory();

var clock = sinon.useFakeTimers();
clock.setSystemTime(1000);
clock.setSystemTime(new Date());

class TestCreateStubInstance {
    someTestMethod(testArg : string) {};
}

sinon.createStubInstance(TestCreateStubInstance).someTestMethod('some argument');
