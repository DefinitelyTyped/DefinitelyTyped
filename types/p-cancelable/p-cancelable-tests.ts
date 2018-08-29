/// <reference types="node" />

import PCancelableCtor = require('p-cancelable');
import { EventEmitter } from "events";

const cancelablePromise: PCancelableCtor.PCancelable<{}> = new PCancelableCtor((resolve, reject, onCancel) => {
    class Worker extends EventEmitter {
        close() {
        }
    }

    const worker = new Worker();

    onCancel(() => {
        worker.close();
    });

    worker.on('finish', resolve);
    worker.on('error', reject);
});

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
}, 10000);

const fn = PCancelableCtor.fn((onCancel: (fn?: () => void) => void, input: string) => {
    const job = {
        start() {
            return Promise.resolve(10);
        },
        cleanup() {
        }
    };

    onCancel(() => {
        job.cleanup();
    });

    return job.start();
});

const promise = fn('input');
let num: number;
promise.then(innum => num = innum);
if (!promise.isCanceled) {
    promise.cancel();
}

const err: PCancelableCtor.CancelError = new PCancelableCtor.CancelError();
throw err;
