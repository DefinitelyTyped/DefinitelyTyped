import slocket = require('slocket');

function someMutexedThing() {
    slocket('/path/to/my-lock-name', (er, lock) => {
        er; // $ExpectType Error | null
        lock; // $ExpectType Lock
        if (er) {
            throw er;
        }

        lock.release();
        lock.release(true);
    });
}

slocket('/path/to/filename.lock')
    .then(lock => {
        lock; // $ExpectType Lock
        lock.release();
    })
    .catch(er => {
    });

async function fooSingleFile() {
    const lock = await slocket('foo');
    lock.release();
}
