/// <reference path="../should/should.d.ts" />
/// <reference path="should-promised.d.ts" />
/// <reference path="../bluebird/bluebird.d.ts" />

var promise: Promise<number> = new Promise<number>(function (resolve, reject) {});

promise.should.be.Promise;
(10).should.not.be.a.Promise;

promise.should.be.fulfilled;

promise.should.be.rejected;

promise.should.be.rejectedWith(Error);
promise.should.be.rejectedWith('boom');
promise.should.be.rejectedWith(/boom/);
promise.should.be.rejectedWith(Error, { message: 'boom' });
promise.should.be.rejectedWith({ message: 'boom' });

promise.should.be.eventually.equal(10);
promise.should.be.finally.equal(10);
