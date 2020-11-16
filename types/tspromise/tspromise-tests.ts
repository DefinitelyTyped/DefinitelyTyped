

import Promise = require('tspromise');

var MyFuncFunc = Promise.async((a: boolean, b: number) => {
    console.log('[a] ' + a);
    // NOTE( https://github.com/DefinitelyTyped/DefinitelyTyped/pull/5590 ) yield(Promise.waitAsync(1000));
    console.log('[b]' + b);
});

MyFuncFunc(true, 10);

Promise.all([Promise.waitAsync(10), Promise.waitAsync(20)]).then(() => {
    return new Promise<String>((resolve, reject) => {
        resolve('test');
    });
}).then(() => {
    throw (new Error());
}).catch((e) => {
    console.log(e.message);
});
