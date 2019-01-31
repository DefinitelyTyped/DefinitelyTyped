/// <reference types="node" />

import PCancelable = require('p-cancelable');
import { EventEmitter } from 'events';

const cancelablePromise: PCancelable.PCancelable<{}> = new PCancelable(
    (resolve, reject, onCancel) => {
        class Worker extends EventEmitter {
            close() {}
        }

        const worker = new Worker();

        onCancel.shouldReject = false;
        onCancel(() => {
            worker.close();
        });

        worker.on('finish', resolve);
        worker.on('error', reject);
    }
);

cancelablePromise
    .then(value => {
        console.log('Operation finished successfully:', value);
    })
    .catch(reason => {
        if (cancelablePromise.isCanceled) {
            // Handle the cancelation here
            console.log('Operation was canceled');
            return;
        }

        throw reason;
    });

setTimeout(() => {
    cancelablePromise.cancel();
    cancelablePromise.cancel('foo');
}, 10000);

const fn0 = PCancelable.fn(onCancel => {
    // $ExpectType OnCancelFn
    onCancel;

    return Promise.resolve(10);
});
// $ExpectType () => PCancelable<number>
fn0;

const fn1 = PCancelable.fn((p1: string, onCancel: PCancelable.OnCancelFn) => {
    return Promise.resolve(10);
});
// $ExpectType (param1: string) => PCancelable<number>
fn1;

const fn2 = PCancelable.fn((p1: string, p2: boolean, onCancel: PCancelable.OnCancelFn) => {
    return Promise.resolve(10);
});
// $ExpectType (param1: string, param2: boolean) => PCancelable<number>
fn2;

const fn3 = PCancelable.fn(
    (p1: string, p2: boolean, p3: number, onCancel: PCancelable.OnCancelFn) => {
        return Promise.resolve(10);
    }
);
// $ExpectType (param1: string, param2: boolean, param3: number) => PCancelable<number>
fn3;

const fn4 = PCancelable.fn(
    (p1: string, p2: boolean, p3: number, p4: null, onCancel: PCancelable.OnCancelFn) => {
        return Promise.resolve(10);
    }
);
// $ExpectType (param1: string, param2: boolean, param3: number, param4: null) => PCancelable<number>
fn4;

const promise = fn0();
let num: number;
promise.then(innum => (num = innum));
if (!promise.isCanceled) {
    promise.cancel();
}

const err: PCancelable.CancelError = new PCancelable.CancelError();
throw err;
