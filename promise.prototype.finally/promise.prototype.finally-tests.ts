/// <reference path="./promise.prototype.finally.d.ts"/>

var promise = new Promise<Boolean>((resolve, reject) => {
	resolve(true);
});

promise.finally(() => {});
promise.then(() => {}, () => {}).finally(() => {});
promise.catch(() => {}).finally(() => {});

var allPromise = Promise.all([promise]);
allPromise.finally(() => {});
