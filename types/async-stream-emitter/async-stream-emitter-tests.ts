import AsyncStreamEmitter = require('async-stream-emitter');

// From README.md

const emitter = new AsyncStreamEmitter<string>();

(async () => {
    await wait(10);
    emitter.emit('foo', 'hello');

    // This will cause all for-await-of loops for that event to exit.
    // Note that you can also use the 'break' statement inside
    // individual for-await-of loops.
    emitter.closeListener('foo');
})();

(async () => {
    // tslint:disable-next-line: await-promise Bug in tslint: https://github.com/palantir/tslint/issues/3997
    for await (const data of emitter.listener('foo')) {
        // data is 'hello'
        // $ExpectType string
        data;
    }
    console.log('The listener was closed.');
})();

// Utility function.
function wait(duration: number) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    });
}
