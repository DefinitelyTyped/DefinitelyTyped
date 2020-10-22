import * as sinon from 'sinon';

function testReturnsPromise() {
    const stub = sinon.stub().returnsPromise();
}

function testResolve() {
    const stub = sinon
        .stub()
        .returnsPromise()
        .resolves("test val");
}

function testReject() {
    const stub = sinon
        .stub()
        .returnsPromise()
        .rejects("test val");
}

function testThenableThen() {
    const stub = sinon.stub().returnsPromise();
    const thenable = stub.thenable;
    thenable.then(() => {});
    thenable.then(resolveValue => {});
    thenable.then(() => {}, () => {});
    thenable.then(() => {}, rejectValue => {});
    thenable.then(resolveValue => {}, rejectValue => {});
}

function testThenableCatch() {
    const stub = sinon.stub().returnsPromise();
    const thenable = stub.thenable;
    thenable.catch(() => {});
    thenable.catch(rejectValue => {});
}

function testThenableFinally() {
    const stub = sinon.stub().returnsPromise();
    const thenable = stub.thenable;
    thenable.finally(() => {});
}

testReturnsPromise();
testResolve();
testReject();
testThenableThen();
testThenableCatch();
testThenableFinally();
