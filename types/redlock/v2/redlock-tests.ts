import * as Redlock from 'redlock';
import { Lock } from 'redlock';
import { RedisClient } from 'redis';
import { using } from 'bluebird';

let redlock: Redlock;
const client: RedisClient = <RedisClient> {};
const lock: Lock = <Lock> {};

redlock = new Redlock([client]);
redlock = new Redlock([client], {
    driftFactor: 0.1,
    retryCount: 2,
    retryDelay: 3
});

redlock.acquire('resource', 30).then((lock: Lock) => {});
redlock.acquire('resource', 30, (err: any, lock: Lock) => {});
redlock.lock('resource', 30).then((lock: Lock) => {});
redlock.lock('resource', 30, (err: any, lock: Lock) => {});

using(redlock.disposer('resource', 30), (lock: Lock) => Promise.resolve());

redlock.release(lock);
redlock.release(lock, (err: any) => {});
redlock.unlock(lock);
redlock.unlock(lock, (err: any) => {});

redlock.extend(lock, 30).then((lock: Lock) => {});
redlock.extend(lock, 30, (err: any, lock: Lock) => {});

lock.unlock();
lock.unlock((err) => {});

lock.extend(30).then((lock: Lock) => {});
lock.extend(30, (err: any, lock: Lock) => {});

new Object() instanceof redlock.Lock;

new Error() instanceof redlock.LockError;

redlock.LockError.prototype;
const lockError: Redlock.LockError = new redlock.LockError();
