import pDefer = require('p-defer');

function delay(ms: number) {
    const deferred = pDefer<string>();
    setTimeout(deferred.resolve, ms, '🦄');
    return deferred.promise;
}

let s: string;
async function f() { s = await delay(100); }
