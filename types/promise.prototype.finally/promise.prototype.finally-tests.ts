import promiseFinally = require('promise.prototype.finally');

promiseFinally.shim();

var promise = new Promise<Boolean>((resolve, reject) => {
	resolve(true);
});

promise.finally(() => {});
promise.finally(() => <PromiseLike<void>>Promise.resolve());
promise.then(() => {}, () => {}).finally(() => {});
promise.catch(() => {}).finally(() => {});

var allPromise = Promise.all([promise]);
allPromise.finally(() => {});
