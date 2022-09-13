import { PaymentParams, Sandbox, SchedMsg, Supervisor } from "../index";

export class Worker {
    /**
     * @start - Emitted when the worker is started.
     * @stop - Emitted when the worker is stopped.
     * @fetchStart - Emitted when the worker submits a result. Contains the value of DCC earned.
     * @fetchEnd - Emitted when the worker’s slice fetch request is finished, on both success and error. If it was emmitted due to an error, the callback argument will be the error instance.
     * @fetch - Emitted when the worker successfully fetches slices from the scheduler.
     * @fetchError - Emitted when the worker’s slice fetch request returns an error. The callback argument is the error instance.
     * @submitStart - Emitted when the worker starts a request to submit a result to the scheduler.
     * @submitEnd - Emitted when the worker’s result submit request is finished, on both success and error. If it was emitted due to an error, the callback argument wil be the error instance.
     * @submit - Emitted when the worker successfully submits a result to the scheduler.
     * @submitError - Emitted when the worker successfully submits a result to the scheduler.
     */
    on(event: 'start' | 'stop' | 'fetchStart' | 'fetchEnd' | 'fetch' | 'fetchError' | 'submitStart' | 'submitEnd' | 'submit' | 'submitError', listener: () => void): this;

    /**
     * Emitted when the worker instantiates a new sandbox. The argument provided to the callback is the Sandbox instance.
     */
    on(event: 'sandbox', listener: (sandbox: Sandbox) => void): this;

    /**
     * Emitted when the worker submits a result. Contains the value of DCC earned.
     */
    on(event: 'payment', listener: (paymentParams: PaymentParams) => void): this;

    /**
     * This boolean indicates the current status of the worker. It should not be set manually.
     */
    working: boolean;

    /**
     * @summary The internal supervisor instance.
     */
    supervisor: Supervisor;

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
