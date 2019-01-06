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

const release = lockSync('some/file'); // $ExpectType () => void
release(); // $ExpectType void
unlockSync('some/file'); // $ExpectType void
checkSync('some/file'); // $ExpectType boolean
