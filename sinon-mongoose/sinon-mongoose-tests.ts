/// <reference path="sinon-mongoose.d.ts"/>
function testChain() {
    sinon.stub().chain('exec');
}

testChain();
