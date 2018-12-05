import pDefer = require('p-defer');

function delay(deferred: pDefer.DeferredPromise<string>, ms: number) {
    setTimeout(deferred.resolve, ms, '🦄');
    return deferred.promise;
}

const s: Promise<string> = delay(pDefer<string>(), 100);

// $ExpectType void
pDefer().resolve();
// $ExpectType void
pDefer().reject('oh no');
