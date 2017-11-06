import promiseFinally from 'promise.prototype.finally';

promiseFinally.shim();

const promise = new Promise<boolean>((resolve, reject) => {
    resolve(true);
});

promise.finally(() => {});
promise.finally(() => <PromiseLike<void>> Promise.resolve());
promise.then(() => {}, () => {}).finally(() => {});
promise.catch(() => {}).finally(() => {});

const allPromise = Promise.all([promise]);
allPromise.finally(() => {});

const resolved = Promise.resolve(42);
const rejected = Promise.reject(-1);

let num: number;
promiseFinally(resolved, () => Promise.resolve(true))
  .then((x: number) => num = x);

promiseFinally(resolved, () => <PromiseLike<boolean>> Promise.resolve(true))
  .then((x: number) => num = x);

promiseFinally(rejected, () => false)
  .catch((e: number) => num = e);

let bool: boolean;
promiseFinally(rejected, () => { throw false; })
  .catch((e: boolean) => bool = e);
