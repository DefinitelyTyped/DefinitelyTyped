import * as promiseNodeify from "promise-nodeify";

const promise = new Promise<any>((resolve, reject) => {});
const callback = () => {};

promiseNodeify(promise, callback);
promiseNodeify.delegated(promise, callback);
promiseNodeify.nodeifyThis(callback);
