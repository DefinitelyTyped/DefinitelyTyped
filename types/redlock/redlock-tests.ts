import * as Redlock from 'redlock';
import { Callback as NodeifyCallback, Options, Lock, LockError } from 'redlock';
import * as bluebird from 'bluebird';
import { RedisClient } from 'redis';

let redlock: Redlock;
let client: RedisClient;
let lock: Lock;

redlock = new Redlock([client]);
redlock = new Redlock([client], {
	driftFactor: 0.1,
	retryCount: 2,
	retryDelay: 3
});

redlock.acquire('resource', 30).then((lock: Lock) => { });
redlock.acquire('resource', 30, (err: any, lock: Lock) => { });
redlock.lock('resource', 30).then((lock: Lock) => { });
redlock.lock('resource', 30, (err: any, lock: Lock) => { });

(async () => {
	try {
		await redlock.lock('thing', 30);
	} catch (err) {
		if (err instanceof LockError) {
			return;
		}
	}
});

bluebird.using(redlock.disposer('resource', 30), (lock: Lock) => Promise.resolve());

redlock.release(lock);
redlock.release(lock, (err: any) => { });
redlock.unlock(lock);
redlock.unlock(lock, (err: any) => { });

redlock.extend(lock, 30).then((lock: Lock) => { });
redlock.extend(lock, 30, (err: any, lock: Lock) => { });

lock.unlock();
lock.unlock((err) => { });

lock.extend(30).then((lock: Lock) => { });
lock.extend(30, (err: any, lock: Lock) => { });
