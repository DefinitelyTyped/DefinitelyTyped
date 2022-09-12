import {
    AuthKeystoreOptions,
    init,
    LoadOptions,
    PaymentParams,
    Sandbox,
} from 'dcp-client';

//#region Models
export const authKeystoreOptions: AuthKeystoreOptions = {
    name: 'default',
    checkEmpty: false,
};

export const loadOptions: LoadOptions = {
    filename: '',
    name: '',
    dir: '',
};

//#endregion

(async () => {
    const { compute, wallet, worker } = await init();

    /* Wallet API Tests */
    await compute.cancel();

    /* Wallet API Tests */
    await wallet.get(authKeystoreOptions);
    await wallet.load(loadOptions);
    await wallet.getId();

    /* Worker API Tests */
    await worker.start();
    await worker.stop(false);

    worker.on('start', () => 'worker is started');
    worker.on('stop', () => 'worker is stopped');
    worker.on('fetchStart', () => 'fetchStart event triggered');
    worker.on('fetchEnd', () => 'fetchEnd event triggered');
    worker.on('fetch', () => 'fetch event triggered');
    worker.on('fetchError', () => 'fetchError event triggered');
    worker.on('submitStart', () => 'submitStart event triggered');
    worker.on('submitEnd', () => 'submitEnd event triggered');
    worker.on('submit', () => 'submit event triggered');
    worker.on('submitError', () => 'submitError event triggered');
    worker.on('payment', (payment: PaymentParams) => payment);

    worker.on('sandbox', (sandbox: Sandbox) => {
        sandbox.on('sliceStart', (job: object) => job);
        sandbox.on('sliceFinish', (result: any) => result);
        sandbox.on('sliceError', () => 'sliceError event triggered');
        sandbox.on('sliceEnd', () => 'sliceEnd event triggered');
        sandbox.on('terminate', () => 'terminate event triggered');
    });

    worker.schedMsg.reload();
    worker.schedMsg.openPopup('href');
    worker.schedMsg.kill(false);
    worker.schedMsg.remove('jobAddress');
    worker.schedMsg.restart();
    worker.schedMsg.announce('message');
})();
