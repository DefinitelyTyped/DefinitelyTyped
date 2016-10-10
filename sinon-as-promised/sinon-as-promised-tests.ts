/// <reference types="sinon"/>

function testResolve() {
    Sinon.stub().resolves('test val');
}

function testReject() {
    Sinon.stub().rejects('test val');
}

testResolve();
testReject();
