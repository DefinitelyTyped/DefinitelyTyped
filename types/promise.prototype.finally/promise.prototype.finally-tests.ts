import promiseFinally = require('promise.prototype.finally');

promiseFinally.shim();

let promise = new Promise<boolean>((resolve, reject) => {
	resolve(true);
});

promise.finally(() => {});
promise.finally(() => <PromiseLike<void>> Promise.resolve());
promise.then(() => {}, () => {}).finally(() => {});
promise.catch(() => {}).finally(() => {});

let allPromise = Promise.all([promise]);
allPromise.finally(() => {});
