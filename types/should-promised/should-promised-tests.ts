/// <reference types="should" />


var promise: Promise<number> = new Promise<number>(function (resolve, reject) {});

promise.should.be.Promise;
(10).should.not.be.a.Promise;

promise.should.be.fulfilled();

promise.should.be.rejected();

promise.should.be.rejectedWith(Error);
promise.should.be.rejectedWith('boom');
promise.should.be.rejectedWith(/boom/);
promise.should.be.rejectedWith(Error, { message: 'boom' });
promise.should.be.rejectedWith({ message: 'boom' });

promise.should.be.eventually.equal(10);
promise.should.be.finally.equal(10);
