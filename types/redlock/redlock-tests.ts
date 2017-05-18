import * as Redlock from 'redlock';
import { Callback as NodeifyCallback, Options, Lock } from 'redlock';
import * as Promise from 'bluebird';
import {RedisClient} from 'redis';

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

// There is currently no way to test the disposer as the bluebird typings does not
//	expose the .using method.
// promise.using(redlock.disposer('resource', 30), (lock: Lock) => {});

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
