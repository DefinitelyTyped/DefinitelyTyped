import * as sinon from "sinon";

function testChain() {
    sinon.stub().chain('exec');
}

testChain();
