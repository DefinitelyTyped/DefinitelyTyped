import Promise = require('bluebird');
import retry = require('bluebird-retry');

function promiseSuccess(text: string) {
    return Promise.resolve(text);
}

let count = 0;
function myfunc() {
    console.log(`myfunc called ${++count} times`);
    if (count < 3) {
        throw new Error('i fail the first two times');
    } else {
        return promiseSuccess('i succeed the third time');
    }
}

retry(myfunc)
    .done(result => { console.log(result); });

// Options example
function logFail() {
    console.log(new Date().toISOString());
    throw new Error('bail');
}

const options: retry.Options = {
    max_tries: 4,
    interval: 500
};

retry(logFail, options);

function stopErrorExample() {
    console.log('retrying\n');
    throw new retry.StopError('stop retrying');
}

retry(stopErrorExample);
