type SchedMsg = import(".").SchedMsg;
type PaymentParams = import(".").PaymentParams;

// In Node.js programs, calling `init()` injects `dcp/*` modules into the module cache.
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "dcp/worker" {
    export default class Worker {
        /**
         * start - Emitted when the worker is started.
         * stop - Emitted when the worker is stopped.
         * fetchStart - Emitted when the worker submits a result. Contains the value of DCC earned.
         * fetchEnd - Emitted when the worker’s slice fetch request is finished, on both success and error. If it was emmitted due to an error, the callback argument will be the error instance.
         * fetch - Emitted when the worker successfully fetches slices from the scheduler.
         * fetchError - Emitted when the worker’s slice fetch request returns an error. The callback argument is the error instance.
         * submitStart - Emitted when the worker starts a request to submit a result to the scheduler.
         * submitEnd - Emitted when the worker’s result submit request is finished, on both success and error. If it was emitted due to an error, the callback argument wil be the error instance.
         * submit - Emitted when the worker successfully submits a result to the scheduler.
         * submitError - Emitted when the worker successfully submits a result to the scheduler.
         */
        on(
            event:
                | "start"
                | "stop"
                | "fetchStart"
                | "fetchEnd"
                | "fetch"
                | "fetchError"
                | "submitStart"
                | "submitEnd"
                | "submit"
                | "submitError",
            listener: () => void,
        ): this;

        /**
         * Emitted when the worker instantiates a new sandbox. The argument provided to the callback is the Sandbox instance.
         */
        on(event: "sandbox", listener: (sandbox: Sandbox) => void): this;

        /**
         * Emitted when the worker submits a result. Contains the value of DCC earned.
         */
        on(event: "payment", listener: (paymentParams: PaymentParams) => void): this;

        /**
         * This boolean indicates the current status of the worker. It should not be set manually.
         */
        working: boolean;

        /**
         * @summary The internal schedMsg client instance. Custom behaviour for schedMsg commands can be provided on this object
         */
        schedMsg: SchedMsg;

        /**
         * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=maxworkingsandboxes%20number#methods)
         * This static method will set a key in local storage (or on the file system on Node) to disable the worker.
         * The user will need to manually intervene before the worker can be started again.
         */
        static disableWorker(): void;

        /**
         * This method will start the worker. It will begin to fetch work from the supervisor and submit the computed results automatically.
         * It will throw if the worker is already started.
         */
        start(): Promise<void>;

        /**
         * This method will stop the worker. If the immediate flag is true,
         * the worker will terminate all working sandboxes without waiting for them to finish working.
         */
        stop(immediate: boolean): Promise<void>;
    }

    /**
     * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=maxworkingsandboxes%20number#sandbox-api)
     */
    class Sandbox {
        /**
         * Emitted when the sandbox begins working on a slice. The job description object. Use job.public for accessing the job’s title/description.
         */
        addEventListener(event: "sliceStart", listener: (job: object) => void): void;

        /**
         * Emitted when the sandbox completes the slice it was working on.
         */
        addEventListener(event: "sliceFinish", listener: (result: any) => void): void;

        /**
         * sliceError - Emitted when the slice the sandbox was working on throws an error. The first argument is the same payload from sliceStart, the second argument is the error instance.
         * sliceEnd - Emitted when the slice either finishes or throws an error. The callback argument is the payload from sliceStart.
         * terminate - Emitted when the sandbox environment is terminated. The sandbox will not be used after this event is emitted.
         */
        addEventListener(event: "sliceError" | "sliceEnd" | "terminate", listener: () => void): void;

        on: typeof Sandbox.prototype.addEventListener;
    }
}
