import Redlock = require('redlock');
import { Lock } from 'redlock';
import { RedisClient } from 'redis';
import IoRedisClient = require('ioredis');
import { using } from 'bluebird';

const lock: Lock = <Lock> {};

const client1 = new RedisClient({port: 6379, host: 'redis1.example.com'});
const client2 = new RedisClient({port: 6379, host: 'redis2.example.com'});
const client3 = new IoRedisClient({port: 6379, host: 'redis3.example.com'});

const redlock = new Redlock(
    [client1, client2, client3],
    {
        driftFactor: 0.01,
        retryCount: 10,
        retryDelay: 200,
        retryJitter: 200
    }
);

redlock.on('clientError', (err) => {
    console.error('A redis error has occurred:', err);
});

redlock.acquire('resource', 30).then((lock: Lock) => {});
redlock.acquire('resource', 30, (err: any, lock: Lock) => {});
redlock.lock('resource', 30).then((lock: Lock) => {});
redlock.lock('resource', 30, (err: any, lock: Lock) => {});

using<Lock, void>(redlock.disposer('locks:account:322456', 1000, err => console.error(err)), (lock) => {
    return Promise.resolve();
});
using<Lock, void>(redlock.disposer('locks:account:322456', 1000, err => console.error(err)), (lock) => {
    return lock.extend(1000).then((extended: Lock) => {});
});

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

redlock.lock('locks:account:322456', 1000).then((lock) => {
    return lock
        .unlock()
        .catch((err) => {
            console.error(err);
        });
});

redlock.lock('locks:account:322456', 1000).then(lock => {
    return lock
        .extend(1000)
        .then(lock => {
            return lock
                .unlock()
                .catch(err => {
                    console.error(err);
                });
        });
});

redlock.lock('locks:account:322456', 1000, (err, lock) => {
    if (err || !lock) {
    } else {
        lock.unlock(err => {
            console.error(err);
        });
    }
});

redlock.lock('locks:account:322456', 1000, (err, lock) => {
    if (err || !lock) {
    } else {
        lock.extend(1000, (err, lock) => {
            if (err || !lock) {
            } else {
                lock.unlock();
            }
        });
    }
});

new Object() instanceof redlock.Lock;

new Error() instanceof redlock.LockError;

redlock.LockError.prototype;
const lockError: Redlock.LockError = new redlock.LockError();
