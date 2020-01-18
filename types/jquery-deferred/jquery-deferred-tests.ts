/// <reference types="node" />
import $ from 'jquery-deferred';

function wait(timeout: number): () => void {
    return (): $.JQueryPromise => {
        const deferred = $.Deferred();
        setTimeout(() => deferred.resolve(), timeout);
        return deferred.promise();
    };
}

let start: $.JQueryDeferred;

start = $.Deferred();
start
.then(wait(5))
.then(wait(25))
.done(() => console.log('waited for 30 ms'));
start.resolve();

start = $.Deferred();
start
.then(wait(60))
.then(() => $.Deferred().reject().promise())
.fail(() => console.log('failed after 60 ms'));
start.resolve();
