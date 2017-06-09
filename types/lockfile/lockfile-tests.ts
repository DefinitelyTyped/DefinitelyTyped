
import lockfile = require('lockfile');

var bool: boolean;
var num: number;
var path: string;

var opts: lockfile.Options;
var callback: (err: Error) => {

};
var callback2: (err: Error, isLocked: boolean) => {

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

lockfile.unlock(path, callback);;
lockfile.unlockSync(path);

lockfile.check(path, opts, callback2);
lockfile.check(path, callback2);

bool = lockfile.checkSync(path, opts);
