import PushStream from 'zen-push';
import Observable = require('zen-observable');

function assert(val: boolean) {
    if (!val) {
        throw new Error('Assertion Failure');
    }
}

const stream1 = new PushStream<number>();

assert(stream1.observable instanceof Observable);
assert(typeof stream1.observed === 'number');

stream1.next(15);

stream1.next(23);

stream1.error(new Error('test 123'));

stream1.complete();
