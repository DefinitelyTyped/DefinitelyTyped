import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

class TestClass {}

// ReSharper disable WrongExpressionStatement
// BDD API (expect)
var thenableNum: PromiseLike<number> = Promise.resolve(3);
thenableNum = chai.expect(thenableNum).to.eventually.equal(3);
thenableNum = chai.expect(thenableNum).to.eventually.have.property('foo');
thenableNum = chai.expect(thenableNum).to.become(3);
thenableNum = chai.expect(thenableNum).to.be.fulfilled;
thenableNum = chai.expect(thenableNum).to.be.rejected;
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(Error);
thenableNum = chai.expect(thenableNum).to.be.rejectedWith('Error');
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(/message/);
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(Error, /message/);
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(Error, 'message');
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(TestClass);
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(TestClass, /message/);
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(TestClass, 'message');
thenableNum = chai.expect(thenableNum).to.notify(() => console.log('done'));

// BDD API (should)
thenableNum = thenableNum.should.be.fulfilled;
thenableNum = thenableNum.should.eventually.deep.equal(3);
thenableNum = thenableNum.should.eventually.become(3);
thenableNum = thenableNum.should.become(3);
thenableNum = thenableNum.should.be.rejected;
thenableNum = thenableNum.should.be.rejectedWith(Error);
thenableNum = thenableNum.should.be.rejectedWith('Error');
thenableNum = thenableNum.should.be.rejectedWith(/message/);
thenableNum = thenableNum.should.be.rejectedWith(Error, /message/);
thenableNum = thenableNum.should.be.rejectedWith(Error, 'message');
thenableNum = thenableNum.should.be.rejectedWith(TestClass);
thenableNum = thenableNum.should.be.rejectedWith(TestClass, /message/);
thenableNum = thenableNum.should.be.rejectedWith(TestClass, 'message');
thenableNum = thenableNum.should.eventually.equal(3).notify(() => console.log('done'));
thenableNum = thenableNum.should.be.fulfilled.and.notify(() => console.log('done'));

// Complex examples on https://github.com/domenic/chai-as-promised#working-with-non-promisefriendly-test-runners
thenableNum.should.be.fulfilled.then(() => {
    thenableNum.should.equal("after");
}).should.notify(() => console.log('done'));

Promise.all([
    thenableNum.should.become("happy"),
    thenableNum.should.eventually.have.property("fun times"),
    thenableNum.should.be.rejectedWith(TypeError, "only joyful types are allowed")
]).should.notify(() => console.log('done'));

// Assert API
var thenableVoid: PromiseLike<void>;
thenableVoid = chai.assert.eventually.equal(thenableNum, 4, 'Message');
thenableVoid = chai.assert.isFulfilled(thenableNum, "optional message");
thenableVoid = chai.assert.becomes(thenableNum, "foo", "optional message");
thenableVoid = chai.assert.doesNotBecome(thenableNum, "foo", "optional message");
thenableVoid = chai.assert.isRejected(thenableNum, "optional message");
thenableVoid = chai.assert.isRejected(thenableNum, Error, "optional message");
thenableVoid = chai.assert.isRejected(thenableNum, /error message matcher/, "optional message");

// Check that original chai assertions are not broken
var undef: void;
undef = chai.assert.equal(10, 4, 'Message');

chaiAsPromised.transferPromiseness = (assertion, promise) => {
    assertion.then = promise.then.bind(promise);
};

chaiAsPromised.transformAsserterArgs = (args) => {
    return args.map((x) => x + 1);
};

chaiAsPromised.transformAsserterArgs = (args) => {
    return Promise.all(args);
};
