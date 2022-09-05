import * as dcpClient from 'dcp-client';

/* Wallet API Tests */

const authKeystoreOptions: dcpClient.AuthKeystoreOptions = {
    name: 'default',
    checkEmpty: false
};

const loadOptions: dcpClient.LoadOptions = {
    filename: '',
    name: '',
    dir: ''
};

const wallet = new dcpClient.Wallet();

wallet.get(authKeystoreOptions).then(authKeystore => authKeystore); // $ExpectType AuthKeystore
wallet.load(loadOptions).then(result => result); // $ExpectType LoadResult

/* Worker API Tests */

const sandboxOptions: dcpClient.SandboxOptions = {
    ignoreNoProgress: true
};

const workerParams: dcpClient.WorkerParams = {
    maxWorkingSandboxes: 1,
    sandboxOptions
};

dcpClient.Worker.disableWorker(); // $ExpectType void

const worker = new dcpClient.Worker(workerParams);

worker.on('start', () => 'worker is started'); // $ExpectType void
worker.on('stop', () => 'worker is stopped'); // $ExpectType void
worker.on('fetchStart', () => 'fetchStart event triggered'); // $ExpectType void
worker.on('fetchEnd', () => 'fetchEnd event triggered'); // $ExpectType void
worker.on('fetch', () => 'fetch event triggered'); // $ExpectType void
worker.on('fetchError', () => 'fetchError event triggered'); // $ExpectType void
worker.on('submitStart', () => 'submitStart event triggered'); // $ExpectType void
worker.on('submitEnd', () => 'submitEnd event triggered'); // $ExpectType void
worker.on('submit', () => 'submit event triggered'); // $ExpectType void
worker.on('submitError', () => 'submitError event triggered'); // $ExpectType void

worker.on('sandbox', (sandbox: dcpClient.Sandbox) => sandbox); // $ExpectType void
worker.on('payment', (payment: dcpClient.PaymentParams) => payment); // $ExpectType void

const sandbox = new dcpClient.Sandbox();
sandbox.on('sliceStart', (job: object) => job); // $ExpectType void
sandbox.on('sliceFinish', (result: any) => result); // $ExpectType void
sandbox.on('sliceError', () => 'sliceError event triggered'); // $ExpectType void
sandbox.on('sliceEnd', () => 'sliceEnd event triggered'); // $ExpectType void
sandbox.on('terminate', () => 'terminate event triggered'); // $ExpectType void

worker.start().then(); // $ExpectType void
worker.stop(false).then(); // $ExpectType void

worker.schedMsg.reload(); // $ExpectType void
worker.schedMsg.openPopup('href'); // $ExpectType void
worker.schedMsg.kill(false); // $ExpectType boolean
worker.schedMsg.remove('jobAddress'); // $ExpectType void
worker.schedMsg.restart(); // $ExpectType void
worker.schedMsg.announce('message'); // $ExpectType void
