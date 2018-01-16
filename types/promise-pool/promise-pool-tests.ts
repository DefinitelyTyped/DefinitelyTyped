
﻿import Q = require('q');
import promisePool = require('promise-pool');

var pool = new promisePool.Pool<number>((taskDataId, index) => {
    return Q.delay(Math.floor(Math.random() * 5000)).then(function () {
        taskDataId == 0;
        index == 0;
    });
}, 20);

pool
    .pause()
    .delay(5000)
    .then(function () {
        pool.resume();
    });

pool.retries == 0;
pool.retryInterval == 0;
pool.maxRetryInterval == 0;
pool.retryIntervalMultiplier == 0;

pool.add(0);

pool
    .start(onProgress)
    .then(result => {
        result.total == 0;
        return pool.reset();
    })
    .then(() => {
        return pool.start(onProgress);
    })
    .then(result => {
        result.total == 0;
        return pool.reset();
    })
    .then(() => {
        pool.endless == true;
    });

function onProgress(progress: promisePool.IProgress) {
    progress.success == true;
    progress.fulfilled == 0;
    progress.total == 0;
    progress.index == 0;
}
