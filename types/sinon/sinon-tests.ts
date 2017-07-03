import sinon = require("sinon");

function once(fn: Function) {
    let called = false;
    let returnValue: any;

    return function(this: any) {
        if (!called) {
            called = true;
            returnValue = fn.apply(this, arguments);
        }
        return returnValue;
    };
}

function testOne() {
    let callback = sinon.spy();
    let proxy = once(callback);
    proxy();
    if (callback.calledOnce) { console.log("test1 calledOnce success"); } else { console.log("test1 calledOnce failure"); }
}

function testTwo() {
    let callback = sinon.spy(() => { });
    let proxy = once(callback);
    proxy();
    proxy();
    if (callback.calledOnce) { console.log("test2 calledOnce success"); } else { console.log("test2 calledOnce failure"); }
}

function testThree() {
    let obj = { thisObj: true };
    let callback = sinon.spy({}, "method");
    let proxy = once(callback);
    proxy.call(obj, callback, 1, 2, 3);
    if (callback.calledOn(obj)) { console.log("test3 calledOn success"); } else { console.log("test3 calledOn failure"); }
    if (callback.calledWith(callback, 1, 2, 3)) { console.log("test3 calledWith success"); } else { console.log("test3 calledWith failure"); }
}

function testFour() {
    let callback = sinon.stub().returns(42);
    let proxy = once(callback);
    let val = proxy.apply(callback, [1, 2, 3]);
    if (val === 42) { console.log("test4 returns success"); } else { console.log("test4 returns failure"); }
}

function testFive() {
    let callback = sinon.stub().returnsArg(1);
    let proxy = once(callback);
    let val = proxy.apply(callback, [1, 2, 3]);
    if (val === 2) { console.log("test5 returnsArg success"); } else { console.log("test5 returnsArg failure"); }
}

let objectUnderTest: any = {
    process: (obj: any) => {
        // It doesn't really matter what's here because the stub is going to replace this function
        return obj.success(99);
    }
};

function testSix() {
    let stub = sinon.stub(objectUnderTest, "process").yieldsTo("success");
    objectUnderTest.process({
        success: () => { console.log("test6 yieldsTo success"); },
        failure: () => { console.log("test6 yieldsTo failure"); }
    });
    stub.restore();
}

function testSeven() {
    let obj = { functionToTest: () => { } };
    let mockObj = sinon.mock(obj);
    obj.functionToTest();
    mockObj.expects('functionToTest').once();
}

function testEight() {
    sinon.match.typeOf("object").and(sinon.match.has("pages"));
}

function testNine() {
    let callback = sinon.stub().returns(42);
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
    let sandbox = sinon.sandbox.create();
    sandbox = sandbox.usingPromise(Promise);

    sandbox.assert.notCalled(sinon.spy());

    if (sandbox.spy().called) {
        sandbox.stub(objectUnderTest, "process").yieldsTo("success");
        sandbox.mock(objectUnderTest).expects("process").once();
    }
    sandbox.useFakeTimers();
    sandbox.useFakeXMLHttpRequest();
    sandbox.useFakeServer();
    sandbox.restore();
    sandbox.reset();
    sandbox.resetHistory();
    sandbox.resetBehavior();
    sandbox.verify();
    sandbox.verifyAndRestore();
}

function testPromises() {
    let resolveStub = sinon.stub().resolves();
    resolveStub = sinon.stub().resolves(10);
    let rejectStub1 = sinon.stub().rejects();
    let rejectsStub2 = sinon.stub().rejects(new Error('Specified error'));
    rejectsStub2 = sinon.stub().rejects("TypeError");
}

function testMatchInvoke() {
    let stub = sinon.stub();
    stub(123);
    stub.calledWithMatch(sinon.match(123));
    stub.calledWithMatch(sinon.match((value: any) => value === 123));
    stub.calledWithMatch(sinon.match((value: any) => value === 123, "Must be 123"));
}

function testSymbolMatch() {
    let stub = sinon.stub();
    stub(Symbol('TestSymbol'));
    stub.calledWithMatch(sinon.match.symbol);
}

function testResetHistory() {
    sinon.stub().resetHistory();
}

function testUsingPromises() {
    const stub: sinon.SinonStub = sinon.stub().usingPromise(Promise);
}

function testArrayMatchers() {
    const stub = sinon.stub();
    stub([{ a: 'b' }]);
    stub.calledWithMatch(sinon.match.array);
    stub.calledWithMatch(sinon.match.array.deepEquals([{ a: 'b' }]));
    stub.calledWithMatch(sinon.match.array.startsWith([{ a: 'b' }]));
    stub.calledWithMatch(sinon.match.array.deepEquals([{ a: 'b' }]));
    stub.calledWithMatch(sinon.match.array.contains([{ a: 'b' }]));
}

function testMapMatcher() {
    const stub = sinon.stub();
    stub(new Map([['a', true], ['b', false]]));
    stub.calledWithMatch(sinon.match.map);
    stub.calledWithMatch(sinon.match.map.deepEquals(new Map([['a', true], ['b', false]])));
    stub.calledWithMatch(sinon.match.map.contains(new Map([['a', true]])));
}

function testSetMatcher() {
    const stub = sinon.stub();
    stub(new Set(['a', true]));
    stub.calledWithMatch(sinon.match.set);
    stub.calledWithMatch(sinon.match.set.deepEquals(new Set(['a', true])));
    stub.calledWithMatch(sinon.match.set.contains(new Set([true])));
}

function testGetterStub() {
    const myObj: any = {
        prop: 'foo'
    };

    const stub = sinon.stub(myObj, 'prop').get(() => 'bar');
    stub.restore();
}

function testSetterStub() {
    const myObj: any = {
        prop: 'foo',
        prop2: 'bar'
    };

    const stub = sinon.stub(myObj, 'prop').set((val: string) => myObj.prop2 = val);
    stub.restore();
}

function testValueStub() {
    const myObj: any = {
        prop: 'foo'
    };

    const stub = sinon.stub(myObj, 'prop').value('bar');
    stub.restore();
}

function testThrowsStub() {
    sinon.stub().throws(new Error('foo'));
    sinon.stub().throwsException(new Error('foo'));
    sinon.stub().throws('foo');
    sinon.stub().throwsException('foo');
}

function testSpy() {
    const otherSpy = sinon.spy();
    sinon.spy().calledAfter(otherSpy);
    sinon.spy().calledBefore(otherSpy);
    sinon.spy().calledImmediatelyAfter(otherSpy);
    sinon.spy().calledImmediatelyBefore(otherSpy);
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
testSandbox();
testSpy();
testSymbolMatch();
testResetHistory();
testUsingPromises();
testGetterStub();
testSetterStub();
testValueStub();
testThrowsStub();

let clock = sinon.useFakeTimers();
clock.setSystemTime(1000);
clock.setSystemTime(new Date());

class TestCreateStubInstance {
    someTestMethod(testArg: string) { }
}

sinon.createStubInstance(TestCreateStubInstance).someTestMethod('some argument');
sinon.createStubInstance<TestCreateStubInstance>(TestCreateStubInstance).someTestMethod('some argument');

function testGetCalls() {
    let double = sinon.spy((a: number) => a * 2);
    double(2);
    double(4);
    double.getCall(0).args.length === 1;
    const secondCall = double.getCalls().find(call => call.args[0] === 4);
    if (secondCall) {
        secondCall.returnValue === 8;
    }
}
