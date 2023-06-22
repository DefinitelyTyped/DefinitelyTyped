import * as tpu from 'tcp-port-used';

// $ExpectedType boolean
tpu.check(20000).then((isUsed: boolean) => {
    // $ExpectedType boolean
    isUsed;
});

// $ExpectedType boolean
tpu.check(20000, 'localhost').then((isUsed: boolean) => {
    // $ExpectedType boolean
    isUsed;
});

// $ExpectedType boolean
tpu.check({
    port: 20000,
    host: '127.0.0.1',
    status: false,
    retryTimeMs: 2000,
    timeOutMs: 2000
}).then((isUsed: boolean) => {
    // $ExpectedType boolean
    isUsed;
});

// @ts-expect-error
tpu.check();

// $Expected promise void
tpu.waitForStatus(20000, '127.0.0.1', true, 1000, 2000).then(() => { });

// $Expected promise void
tpu.waitForStatus({
    port: 20000,
    host: '127.0.0.1',
    status: true,
    retryTimeMs: 2000,
    timeOutMs: 2000
}).then(() => { });

// @ts-expect-error
tpu.waitForStatus();

// $Expected promise void
tpu.waitUntilFree(20000, 1000, 2000);

// $Expected promise void
tpu.waitUntilFree({
    port: 20000,
    host: '127.0.0.1',
    status: true,
    retryTimeMs: 2000,
    timeOutMs: 2000
}).then(() => { });

// @ts-expect-error
tpu.waitUntilFree();

// $Expected promise void
tpu.waitUntilFreeOnHost(20000, '127.0.0.1', 1000, 2000).then(() => { });

// $Expected promise void
tpu.waitUntilFreeOnHost({
    port: 20000,
    host: '127.0.0.1',
    status: true,
    retryTimeMs: 2000,
    timeOutMs: 2000
}).then(() => { });

// @ts-expect-error
tpu.waitUntilFreeOnHost();

// $Expected promise void
tpu.waitUntilUsed(20000, 1000, 2000).then(() => { });

// $Expected promise void
tpu.waitUntilUsed({
    port: 20000,
    host: '127.0.0.1',
    status: true,
    retryTimeMs: 2000,
    timeOutMs: 2000
}).then(() => { });

// @ts-expect-error
tpu.waitUntilUsed();

// $Expected promise void
tpu.waitUntilUsedOnHost(20000, '127.0.0.1', 1000, 2000).then(() => { });

// $Expected promise void
tpu.waitUntilUsedOnHost({
    port: 20000,
    host: '127.0.0.1',
    status: true,
    retryTimeMs: 2000,
    timeOutMs: 2000
}).then(() => { });

// @ts-expect-error
tpu.waitUntilUsedOnHost();
