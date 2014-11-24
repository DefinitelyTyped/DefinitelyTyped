/// <reference path="lockfile.d.ts" />

import lockfile = require('lockfile');

var bool: boolean;
var num: number;
var path: string;

var opts: lockfile.Options;
var callback: (err: Error) => {

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

lockfile.check(path, opts, callback);
lockfile.check(path, callback);

bool = lockfile.checkSync(path, opts);
