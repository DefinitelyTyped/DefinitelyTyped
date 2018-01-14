import lockfile = require('lockfile');

let bool: boolean;
const num = 1;
const path = '';

let opts: lockfile.Options;
const callback = (err: Error) => {
};
const callback2 = (err: Error, isLocked: boolean) => {
};

opts = {
	wait: num,
	stale: num,
	retries: num,
	retryWait: num
};

lockfile.lock(path, opts, callback);
lockfile.lock(path, callback);
lockfile.lockSync(path, opts);

lockfile.unlock(path, callback);
lockfile.unlockSync(path);

lockfile.check(path, opts, callback2);
lockfile.check(path, callback2);

bool = lockfile.checkSync(path, opts);
