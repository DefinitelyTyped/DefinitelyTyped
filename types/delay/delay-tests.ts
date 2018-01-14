import delay = require('delay');

delay(200)
    .then(() => {
    });

let str: string;
let num: number;
Promise.resolve(delay(100))
    .then(() => {
    });

Promise.resolve("foo")
    .then(delay<string>(100))
    .then(result => {
        str = result;
    });

Promise.resolve('foo')
    .then(delay(100, 10))
    .then(result => {
        num = result;
    });

Promise.resolve('foo')
    .then(delay.reject(100))
    .then(x => 10)
    .catch(err => {
    });

Promise.resolve('foo')
    .then(delay.reject(100, 'bar'))
    .then(x => 10)
    .catch(err => {
    });

(async () => {
    const delaying = delay(1000);
    delaying.cancel();
    try {
        await delaying;
    } catch (err) {
        // `err` is an instance of `delay.CancelError`
    }
})();

throw new delay.CancelError('bar');
