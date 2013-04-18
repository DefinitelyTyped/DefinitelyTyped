/// <reference path="sinon-1.5.d.ts" />

function once(fn) {
	var returnValue, called = false;
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
	var callback = sinon.spy();
	var proxy = once(callback);
	proxy();
	proxy();
	if (callback.calledOnce) { console.log("test2 calledOnce success"); } else { console.log("test2 calledOnce failure"); }
}

function testThree() {
	var obj = { thisObj: true };
	var callback = sinon.spy();
	var proxy = once(callback);
	proxy.call(obj, callback, 1, 2, 3);
	if (callback.calledOn(obj)) { console.log("test3 calledOn success"); } else { console.log("test3 calledOn failure"); }
	if (callback.calledWith(callback, 1, 2, 3)) { console.log("test3 calledWith success"); } else { console.log("test3 calledWith failure"); }
}

function testFour() {
	var obj = { thisObj: true };
	var callback = sinon.stub().returns(42);
	var proxy = once(callback);
	var val = proxy.apply(callback, [1, 2, 3]);
	if (val == 42) { console.log("test4 returns success"); } else { console.log("test4 returns failure"); }
}

function testFive() {
	var obj = { thisObj: true };
	var callback = sinon.stub().returnsArg(1);
	var proxy = once(callback);
	var val = proxy.apply(callback, [1, 2, 3]);
	if (val == 2) { console.log("test5 returnsArg success"); } else { console.log("test5 returnsArg failure"); }
}

var objectUnderTest: any = {
	process: function (obj) {
		// It doesn't really matter what's here because the stub is going to replace this function
		var dummy = true;
		if (dummy) { return obj.success(99); } else { obj.failure(99); }
	}
};

function testSix() {
	var obj = { thisObj: true };
	var stub = sinon.stub(objectUnderTest, "process").yieldsTo("success");
	var val = objectUnderTest.process({
		success: function () { console.log("test6 yieldsTo success"); },
		failure: function () { console.log("test6 yieldsTo failure"); }
	});
	stub.restore();
}

function testSeven() {
	var obj = { functionToTest : function () { } };
	var mockObj = sinon.mock(obj);
	obj.functionToTest();
	mockObj.expects('functionToTest').once();
}

function testEight() {
    var combinedMatcher = sinon.match.typeOf("object").and(sinon.match.has("pages"));
}

testOne();
testTwo();
testThree();
testFour();
testFive();
testSix();
testSeven();
testEight();