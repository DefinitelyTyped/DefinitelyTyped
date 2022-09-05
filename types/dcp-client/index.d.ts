// Type definitions for dcp-client
// Project: https://github.com/Distributed-Compute-Labs/dcp-client
// Definitions by: Roman Fairushyn <https://github.com/roman5364>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyType

/* Wallet API Definitions */

export interface Address {
    account: string;
}

/**
 *  Dummy Keystore Object
 */
export class Keystore {
}

/**
 * Dummy AuthKeystore Object
 */
export class AuthKeystore extends Keystore {
}

export interface LoadResult {
    keystore: Keystore;
    safe: boolean | false;
}

export interface LoadOptions {
    /**
     * The keystore filename.
     */
    filename: string | undefined;

    /**
     * The keystore label or filename.
     */
    name: string | undefined;

    /**
     * Override paths.
     */
    dir: string | undefined;

    /**
     *  Override the default keystore directory search path (Node.js Only). This must be a complete pathname.
     */
    paths?: string[] | LoadOptions["dir"];
}

export interface AuthKeystoreOptions {
    /**
     * The keystore name.
     */
    name: string | 'default';

    /**
     * An optional, user-defined identifier used for caching keystores.
     */
    contextId?: string | undefined;

    /**
     *  An optional name for the job that they keystore is being requested for.
     */
    jobName?: string | undefined;

    /**
     * Try an empty password before prompting user. Defaults to true.
     */
    checkEmpty: boolean | true;
}

export class Wallet {
    /**
     * Gets a keystore from the wallet
     * @returns a Promise which will be fulfilled with a AuthKeystore object.
     * @param options
     */
    get(options: AuthKeystoreOptions): Promise<AuthKeystore>;

    /**
     * Gets a keystore from the disk
     * @returns a Promise which will be fulfilled with a AuthKeystore object.
     * @param options
     */
    load(options: LoadOptions): Promise<LoadResult>;

    constructor();
}

/* Worker API Definitions */

/**
 *  Dummy Supervisor Object
 */
export class Supervisor {
}

export interface SchedMsg {
    /**
     * This command instructs the worker to immediately stop working, and can optionally disable the worker to prevent restarting.
     * The user will need to manually intervene to restart the worker. When false, the worker will be disabled.
     */
    kill(temporary: boolean): void;

    /**
     * This command instructs the worker to restart, e.g. call worker.stop() then worker.start().
     */
    restart(): void;

    /**
     * This command instructs the worker to stop working on a specific job. The address of the job to stop working on.
     */
    remove(jobAddress: string): void;

    /**
     * This command is an announcement from the scheduler,
     * the provided message should be displayed to the user (modal on web, console on node). The message to be displayed to the user.
     */
    announce(message: string): void;

    /**
     * This command instructs the worker to “hard” reload, in the browser this will trigger a page refresh and in node it will exit the process.
     */
    reload(): void;

    /**
     * This web-only command will open a new webpage to the provided URL. The URL to open the new page to.
     */
    openPopup(href: string): void;
}

export class SandboxOptions {
    /**
     * When true, the sandbox will ignore errors from the sandbox not firing progress events.
     */
    ignoreNoProgress: boolean | false;
}

export interface WorkerParams {
    /**
     * @summary Maximum number of sandboxes that can be working at one time.
     */
    maxWorkingSandboxes: number | 1;

    /**
     * @summary Sandbox options
     */
    sandboxOptions: SandboxOptions;

    /**
     * @summary Address used for depositing DCCs in after a slice is computed,
     * will default to (await wallet.get()).address
     */
    paymentAddress?: string | Keystore;

    /**
     * @summary Keystore that will be used as the identity when communicating with the scheduler, will default to wallet.getId()
     */
    identityKeystore?: Keystore | undefined;

    /**
     * @summary URL to use when connecting to the scheduler, defaults to dcpConfig.scheduler.location
     */
    schedulerURL?: string;

    /**
     * @summary When provided, this worker will only compute slices for the provided job. The job must have been deployed with the local exec flag set.
     */
    jobAddress?: string;
}

export class Sandbox {
    constructor();

    /**
     * Emitted when the sandbox begins working on a slice. The job description object. Use job.public for accessing the job’s title/description.
     */
    on(event: 'sliceStart', listener: (job: object) => void): this;

    /**
     * Emitted when the sandbox completes the slice it was working on.
     */
    on(event: 'sliceFinish', listener: (result: any) => void): this;

    /**
     * @sliceError - Emitted when the slice the sandbox was working on throws an error. The first argument is the same payload from sliceStart, the second argument is the error instance.
     * @sliceEnd - Emitted when the slice either finishes or throws an error. The callback argument is the payload from sliceStart.
     * @terminate - Emitted when the sandbox environment is terminated. The sandbox will not be used after this event is emitted.
     */
    on(event: 'sliceError' | 'sliceEnd' | 'terminate', listener: () => void): this;
}

export interface PaymentParams {
    /**
     * Whether the slice was accepted, payment value will be 0 if not accepted.
     */
    accepted: boolean;
    /**
     * String representation of the DCC value that was paid out.
     */
    payment: string;
    /**
     * Reason string for why the slice was accepted/rejected.
     */
    reason: string;
    /**
     * Bank address that the payment was sent to.
     */
    paymentAddress: string;
}

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
     * This contstructor instantiates a worker using the provided options object. workerParams: WorkerParams
     * @param workerParams: WorkerParams
     */
    constructor(workerParams: WorkerParams);

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
