import AsyncLock = require('async-lock');

// test type exports
type Opts = AsyncLock.AsyncLockOptions;
type CB = AsyncLock.AsyncLockDoneCallback<unknown>;
type AL = AsyncLock;

const lock = new AsyncLock();

// $ExpectType void
lock.acquire<number>(
    'key',
    done => {
        done; // $ExpectType AsyncLockDoneCallback<number>
        done(undefined, 1);
    },
    (err, ret) => {
        err; // $ExpectType Error | null | undefined
        ret; // $ExpectType number | undefined
    },
);

// $ExpectType Promise<number>
lock.acquire<number>('key', done => {
    done(undefined, 1);
});
lock.acquire('key', () => 1); // $ExpectType Promise<number>
lock.acquire('key', () => Promise.resolve(1)); // $ExpectType Promise<number>
lock.acquire(['key1', 'key2'], () => 1); // $ExpectType Promise<number>

lock.isBusy(); // $ExpectType boolean
lock.isBusy('key'); // $ExpectType boolean

new AsyncLock({ timeout: 5000 });
new AsyncLock({ maxPending: 5000 });
new AsyncLock({ maxOccupationTime: 5000 });
new AsyncLock({ domainReentrant: true });
new AsyncLock({ skipQueue: true });
new AsyncLock({ Promise: null });

AsyncLock.DEFAULT_TIMEOUT; // $ExpectType number
AsyncLock.DEFAULT_MAX_OCCUPATION_TIME; // $ExpectType number
AsyncLock.DEFAULT_MAX_PENDING; // $ExpectType number
