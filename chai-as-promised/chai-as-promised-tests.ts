/// <reference path="chai-as-promised.d.ts" />
/// <reference path="../q/Q.d.ts" />

import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
import Q = require('q');

chai.use(chaiAsPromised);

// ReSharper disable WrongExpressionStatement
// BDD API (expect)
var thenableNum: Chai.Thenable<number>;
thenableNum = chai.expect(thenableNum).to.eventually.equal(3);
thenableNum = chai.expect(thenableNum).to.eventually.have.property('foo');
thenableNum = chai.expect(thenableNum).to.become(3);
thenableNum = chai.expect(thenableNum).to.be.fulfilled;
thenableNum = chai.expect(thenableNum).to.be.rejected;
thenableNum = chai.expect(thenableNum).to.be.rejectedWith(Error);
thenableNum = chai.expect(thenableNum).to.notify(() => console.log('done'));

// BDD API (should)
thenableNum = thenableNum.should.be.fulfilled;
thenableNum = thenableNum.should.eventually.deep.equal(3);
thenableNum = thenableNum.should.become(3);
thenableNum = thenableNum.should.be.rejected;
thenableNum = thenableNum.should.be.rejectedWith(Error);
thenableNum = thenableNum.should.eventually.equal(3).notify(() => console.log('done'));
thenableNum = thenableNum.should.be.fulfilled.and.notify(() => console.log('done'));

// Complex examples on https://github.com/domenic/chai-as-promised#working-with-non-promisefriendly-test-runners
thenableNum.should.be.fulfilled.then(function () {
  thenableNum.should.equal("after");
}).should.notify(() => console.log('done'));

Q.all([
    thenableNum.should.become("happy"),
    thenableNum.should.eventually.have.property("fun times"),
    thenableNum.should.be.rejectedWith(TypeError, "only joyful types are allowed")
]).should.notify(() => console.log('done'));

// Assert API
var thenableVoid: Chai.Thenable<void>;
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
