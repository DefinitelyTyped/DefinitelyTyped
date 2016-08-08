/// <reference path="sinon-as-promised.d.ts"/>
function testResolve() {
    sinon.stub().resolves('test val');
}

function testReject() {
    sinon.stub().rejects('test val');
}

testResolve();
testReject();
