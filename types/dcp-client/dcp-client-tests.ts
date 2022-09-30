import { init, AuthKeystoreOptions, PaymentParams, Sandbox, Keystore, LoadOptions, RangeObject, MultiRangeObject, SuperRangeObject, ResultHandle } from 'dcp-client';

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

    //#region RangeObject Tests
    const rangeObject = new RangeObject(0, 10);
    const angeObjectLength = rangeObject.length;
    rangeObject.toString();
    rangeObject.toObject();
    rangeObject.nthValue(1);
    rangeObject.filter((num: number) => num % 2 === 0);
    rangeObject.slice(1, 5, 6);
    //#endregion

    //#region ResultHandle Tests
    const resultHandle = new ResultHandle();
    const resultHandleLength = resultHandle.length;
    resultHandle.entries();
    resultHandle.key(1);
    resultHandle.keys();
    resultHandle.lookupValue('lookupValue');
    resultHandle.values();
    resultHandle.fetch(rangeObject, 'resultHandleEvent');
    //#endregion

    //#region ResultHandle Tests
    const superRangeObject = new SuperRangeObject();
    superRangeObject.filter((num: number) => num % 2 === 0);
    superRangeObject.slice(2, 5);
    //#endregion

    //#region MultiRangeObject Tests
    const r0 = new RangeObject(1, 2);
    const r1 = new RangeObject(1, 3);
    const multiRangeObject = new MultiRangeObject(r0, r1);
    multiRangeObject.filter((num: number) => num % 2 === 0);
    multiRangeObject.slice(2, 3, 5);

    //#endregion

    //#region Job Tests
    const initialSliceProfile = {};
    const keystore = new Keystore();
    const iterable = [1, 2, 3, 4, 5];
    const MY_RESEARCH_URL = 'https://localhost:8080/someURL';

    const job = compute.for(iterable, 'work', [100]);

    job.id = 'job-1';
    job.address = 'job-1';
    job.public.name = `DCP for Physics!`;
    job.public.description = `Using DCP for electromagnetic force calculations`;
    job.public.link = MY_RESEARCH_URL;
    job.useStrict = true;

    await job.exec(1, keystore, initialSliceProfile);
    await job.localExec(1,  1, keystore, initialSliceProfile);
    await job.cancel('reason');
    await job.resume('reason');
    await job.requires('path');

    job.on('accepted', () => 'job accepted');
    job.on('complete', () => 'job complete');
    job.on('readystatechange', () => 'job readystatechange');
    job.on('console', () => 'job console');
    job.on('result', () => 'job result');
    //#endregion

    //#region Compute API Tests
    await compute.cancel();
    const startTime = 0;
    const endTime = Date.now();
    const ev = '';

    job.on('result', async (ev: any) => {
        const status = compute.status(startTime, endTime, keystore);
    });

    const rangeObject1 = new RangeObject(1, 1000, 2);
    const rangeObject2 = new RangeObject(0, 1000, 2);
    const multiRange = new MultiRangeObject(rangeObject1, rangeObject2);
    const computeJob = compute.for(multiRange, async (sliceIndex: number[], data: any) => {
        progress();
        return sliceIndex[0] ** 2 + sliceIndex[1] ** 2 + Math.sqrt(data);
    }, [100]);
    //#endregion

    //#region Wallet API Tests
    await wallet.get(authKeystoreOptions);
    await wallet.load(loadOptions);
    await wallet.getId();
    //#endregion

    //#region Worker API Tests
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
    //#endregion
})();
