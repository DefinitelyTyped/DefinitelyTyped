import pDefer = require('p-defer');

function delay(deferred: pDefer.DeferredPromise<string>, ms: number) {
    setTimeout(deferred.resolve, ms, '🦄');
    return deferred.promise;
}

let s: string;
async function f() {
    s = await delay(pDefer<string>(), 100);
}

async function u() {
    const u: void = pDefer().resolve();
    const r: void = pDefer().reject('oh no');
}
