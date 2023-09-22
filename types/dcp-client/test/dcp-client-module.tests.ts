/**
 * @file Tests using the UMD module as a module.
 */

import { init, initSync, type PaymentParams } from "dcp-client";
import { MultiRangeObject, RangeObject, ResultHandle, SuperRangeObject } from "dcp/compute";
import { AuthKeystoreOptions, Keystore, LoadOptions } from "dcp/wallet";
import { Sandbox } from "dcp/worker";

// @ts-expect-error
dcp;

// #region Models
export const authKeystoreOptions: AuthKeystoreOptions = {
    name: "default",
    checkEmpty: false,
};
export const loadOptions: LoadOptions = {
    filename: "",
    name: "",
    dir: "",
};
// #endregion

(async () => {
    let { compute, wallet, worker } = await init();
    // $ExpectType Compute
    compute;
    // $ExpectType Wallet
    wallet;
    // $ExpectType Worker
    worker;

    ({ compute, wallet, worker } = initSync());
    // $ExpectType Compute
    compute;
    // $ExpectType Wallet
    wallet;
    // $ExpectType Worker
    worker;

    // #region RangeObject Tests
    const rangeObject = new RangeObject(0, 10);
    // $ExpectType number
    rangeObject.length;
    rangeObject.toString();
    rangeObject.toObject();
    rangeObject.nthValue(1);
    rangeObject.filter((num: number) => num % 2 === 0);
    rangeObject.slice(1, 5, 6);
    // #endregion

    // #region ResultHandle Tests
    const resultHandle = new ResultHandle();
    // $ExpectType number
    resultHandle.length;
    resultHandle.entries();
    resultHandle.key(1);
    resultHandle.keys();
    resultHandle.lookupValue("lookupValue");
    resultHandle.values();
    resultHandle.fetch(rangeObject, "resultHandleEvent");
    // #endregion

    // #region ResultHandle Tests
    const superRangeObject = new SuperRangeObject();
    superRangeObject.filter((num: number) => num % 2 === 0);
    superRangeObject.slice(2, 5);
    // #endregion

    // #region MultiRangeObject Tests
    const r0 = new RangeObject(1, 2);
    const r1 = new RangeObject(1, 3);
    const multiRangeObject = new MultiRangeObject(r0, r1);
    multiRangeObject.filter((num: number) => num % 2 === 0);
    multiRangeObject.slice(2, 3, 5);

    // #endregion

    // #region Job Tests
    const initialSliceProfile = {};
    // $ExpectType Keystore
    const keystore = await new Keystore();

    const iterable = [1, 2, 3, 4, 5];
    const MY_RESEARCH_URL = "https://localhost:8080/someURL";

    const job = compute.for(iterable, "work", [100]);

    job.id = "job-1";
    job.address = "job-1";
    job.public.name = "DCP for Physics!";
    job.public.description = "Using DCP for electromagnetic force calculations";
    job.public.link = MY_RESEARCH_URL;
    job.useStrict = true;

    await job.exec(1, keystore, initialSliceProfile);
    // $ExpectType ResultHandle
    await job.localExec();
    await job.localExec(1, 1, keystore, initialSliceProfile);
    await job.cancel("reason");
    await job.resume("reason");
    await job.requires("path");

    job.addEventListener("accepted", () => "job accepted");
    job.addEventListener("complete", () => "job complete");
    job.addEventListener("readystatechange", () => "job readystatechange");
    job.addEventListener("console", () => "job console");
    job.addEventListener("result", _event => "job result");
    // #endregion

    // #region Compute API Tests
    await compute.cancel();
    const startTime = 0;
    const endTime = Date.now();

    job.addEventListener("result", async () => {
        // $ExpectType JobHandle
        compute.status(startTime, endTime, keystore);
    });

    const rangeObject1 = new RangeObject(1, 1000, 2);
    const rangeObject2 = new RangeObject(0, 1000, 2);
    const multiRange = new MultiRangeObject(rangeObject1, rangeObject2);
    // $ExpectType JobHandle
    compute.for(
        multiRange,
        async (sliceIndex: number[], data) => {
            progress();
            return sliceIndex[0] ** 2 + sliceIndex[1] ** 2 + Math.sqrt(data);
        },
        [100],
    );
    // #endregion

    // #region Wallet API Tests
    await wallet.get(authKeystoreOptions);
    await wallet.load(loadOptions);
    await wallet.getId();
    // #endregion

    // #region Worker API Tests
    await worker.start();
    await worker.stop(false);

    worker.on("start", () => "worker is started");
    worker.on("stop", () => "worker is stopped");
    worker.on("fetchStart", () => "fetchStart event triggered");
    worker.on("fetchEnd", () => "fetchEnd event triggered");
    worker.on("fetch", () => "fetch event triggered");
    worker.on("fetchError", () => "fetchError event triggered");
    worker.on("submitStart", () => "submitStart event triggered");
    worker.on("submitEnd", () => "submitEnd event triggered");
    worker.on("submit", () => "submit event triggered");
    worker.on("submitError", () => "submitError event triggered");
    worker.on("payment", (payment: PaymentParams) => payment);

    worker.on("sandbox", (sandbox: Sandbox) => {
        sandbox.addEventListener("sliceStart", (job: object) => job);
        sandbox.addEventListener("sliceFinish", () => {
            return;
        });
        sandbox.addEventListener("sliceError", () => "sliceError event triggered");
        sandbox.addEventListener("sliceEnd", () => "sliceEnd event triggered");
        sandbox.addEventListener("terminate", () => "terminate event triggered");
    });

    worker.schedMsg.reload();
    worker.schedMsg.openPopup("href");
    worker.schedMsg.kill(false);
    worker.schedMsg.remove("jobAddress");
    worker.schedMsg.restart();
    worker.schedMsg.announce("message");
    // #endregion
})();
