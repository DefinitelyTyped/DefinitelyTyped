/// <reference path="../chai/chai.d.ts" />
/// <reference path="chai-as-promised.d.ts" />

import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);

var promise: any;
chai.expect(promise).to.eventually.equal(3);
chai.expect(promise).to.become(3);
chai.expect(promise).to.be.rejected;
chai.expect(promise).to.be.rejectedWith(Error);
chai.expect(promise).to.notify(() => console.log('done'));

chai.assert.eventually.equal(promise, 4, 'Message');
chai.assert.isFulfilled(promise, "optional message");
chai.assert.becomes(promise, "foo", "optional message");
chai.assert.doesNotBecome(promise, "foo", "optional message");
chai.assert.isRejected(promise, "optional message");
chai.assert.isRejected(promise, Error, "optional message");
chai.assert.isRejected(promise, /error message matcher/, "optional message");
