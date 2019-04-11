import lockfile = require('lockfile');

let bool: boolean;
const num = 1;
const path = '';

let opts: lockfile.Options;
const callback = (err: Error) => {};

lockfile.lock(path, {wait: num}, callback);
lockfile.lock(path, {pollPeriod: num}, callback);
lockfile.lock(path, {stale: num}, callback);
lockfile.lock(path, {retries: num}, callback);
lockfile.lock(path, {retryWait: num}, callback);

opts = {
    wait: num,
    pollPeriod: num,
    stale: num,
    retries: num,
    retryWait: num
};

lockfile.lock(path, opts, (err) => {
    err; // $ExpectType Error | null
});
lockfile.lock(path, (err) => {
    err; // $ExpectType Error | null
});
lockfile.lockSync(path, opts);
lockfile.lockSync(path);

lockfile.unlock(path, (err) => {
    err; // $ExpectType Error | null
});
lockfile.unlockSync(path);

lockfile.check(path, opts, (err, isLocked) => {
    err; // $ExpectType Error | null
    isLocked; // $ExpectType boolean
});
lockfile.check(path, (err, isLocked) => {
    err; // $ExpectType Error | null
    isLocked; // $ExpectType boolean
});
bool = lockfile.checkSync(path, opts);
bool = lockfile.checkSync(path);
