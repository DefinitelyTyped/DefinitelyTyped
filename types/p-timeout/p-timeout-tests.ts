/// <reference types="node" />

import pTimeout = require('p-timeout');

const delayedPromise: () => Promise<string> = () => new Promise(resolve => setTimeout(() => resolve('foo'), 200));

let str: string;
let num: number;
pTimeout(delayedPromise(), 50).then(() => 'foo');
pTimeout(delayedPromise(), 50, () => {
    return pTimeout(delayedPromise(), 300);
});
pTimeout(delayedPromise(), 50).then(res => str = res);
pTimeout(delayedPromise(), 50, 'error').then(res => str = res);
pTimeout(delayedPromise(), 50, new pTimeout.TimeoutError('error')).then(res => str = res);
pTimeout(delayedPromise(), 50, () => Promise.resolve(10)).then(res => {
    if (typeof res === 'string') {
        str = res;
    } else {
        num = res;
    }
});
pTimeout(delayedPromise(), 50, () => 10).then(res => {
    if (typeof res === 'string') {
        str = res;
    } else {
        num = res;
    }
});
