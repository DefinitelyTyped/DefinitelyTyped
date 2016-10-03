/// <reference path="sinon-stub-promise.d.ts"/>
function testResolve() {
    var promise = sinon.stub().returnsPromise();
    promise.resolves('test val');
}

function testReject() {
    var promise = sinon.stub().returnsPromise();
    promise.rejects('test val');
}

testResolve();
testReject();
