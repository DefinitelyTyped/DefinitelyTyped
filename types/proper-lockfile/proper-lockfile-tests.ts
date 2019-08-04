import {
    check,
    checkSync,
    lock,
    lockSync,
    unlock,
    unlockSync
} from 'proper-lockfile';

(async () => {
    const release = await lock('some/file'); // $ExpectType () => Promise<void>
    await release(); // $ExpectType void

    await lock('some/file'); // $ExpectType () => Promise<void>
    await unlock('some/file'); // $ExpectType void

    await check('some/file'); // $ExpectType boolean
})();

lock('some/file')
    .then((release) => {
        // Do something while the file is locked

        // Call the provided release function when you're done,
        // which will also return a promise
        return release();
    });

lock('some/file')
    .then(() => {
        // Do something while the file is locked

        // Later..
        return unlock('some/file');
    });

check('some/file')
    .then((isLocked) => {
        // isLocked will be true if 'some/file' is locked, false otherwise
    });

lock('', { lockfilePath: 'some/file-lock' })
    .then((release) => release());

const release = lockSync('some/file'); // $ExpectType () => void
release(); // $ExpectType void
unlockSync('some/file'); // $ExpectType void
unlockSync('', { lockfilePath: 'some/file-lock' }); // $ExpectType void
checkSync('some/file'); // $ExpectType boolean
checkSync('', { lockfilePath: 'some/file-lock' }); // $ExpectType boolean

lock('', { retries: 5 });
lock('', { retries: { retries: 5, factor: 2, minTimeout: 100, randomize: true } });

// regression test for #37313
lock('', { retries: { maxRetryTime: 20, unref: true } });
