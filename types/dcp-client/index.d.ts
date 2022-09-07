// Type definitions for dcp-client 4.2.11
// Project: https://github.com/Distributed-Compute-Labs/dcp-client
// Definitions by: Roman Fairushyn <https://github.com/roman5364>
//                 Bryan Hoang <https://github.com/bryan-hoang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyType

/* Compute API */

/**
 *  Dummy JobHandle Object
 */
export class JobHandle {}

export class JobInfo {
    status: string;
    jobInfo: object;
}
export class JobHistory {
    status: string;
    history: object;
}

export interface Ranges {
    ranges: [];
}

export type jobId = number;

/**
 *  Dummy Job Object
 */
export class Job {}

/**
 *  Dummy WorkValueQuote Object
 */
export class WorkValueQuote {}

/**
 *  Dummy WorkValueQuote Object
 */
export class SliceProfile {}

/**
 *  Dummy WorkValue Object
 */
export class WorkValue {}

export interface Compute {
    /**
     * This function allows the client to cancel a running job. This function takes as its sole argument a Job id and tells the scheduler to cancel the job.
     * This method returns a promise which is resolved once the scheduler acknowledges the cancellation and has transitioned to a state where no further costs will be incurred as a result of the job.
     * @returns a Promise which will be fulfilled with an object.
     */
    cancel(): Promise<any>;

    /**
     * form 1: compute.do(work, arguments)
     * This function returns a JobHandle (an object which corresponds to a job), and accepts one or more arguments, depending on form.
     * @returns a Promise which will be fulfilled with a JobHandle object.
     * @param n
     * @param arguments
     */
    do(n: number, arguments: object): Promise<JobHandle>;

    /**
     * form 2: compute.do(n, work, arguments)
     * This function returns a JobHandle (an object which corresponds to a job), and accepts one or more arguments, depending on form.
     * @returns a Promise which will be fulfilled with a JobHandle object.
     * @param n
     * @param work
     * @param arguments
     */
    do(n: number, work: string, arguments: object): Promise<JobHandle>;

    /**
     * Form 1: for (rangeObject, work, arguments)
     * This form accepts a range object rangeObject, (see below) and this range object is used as part of the job on the scheduler.
     * What this means is that this form is very efficient, particularly for large ranges, as the iteration through the set happens on the scheduler,
     * and one item at a time. When the range has { start:0, step:1 }, the returned promise is resolved with an array of resultant values.
     * Otherwise, the returned promise is resolved with an object whose keys are the values in the range.
     * Form 3: for ({ ranges: [rangeObject, rangeObject...] }, work, arguments) Similar to form1,
     * except with a multi range object containing an array of range objects in the key ranges.
     * These are used to create multi-dimensional ranges, like nested loops. If they were written as traditional loops,
     * the outermost loop would be the leftmost range object, and the innermost loop would be the rightmost range object.
     * Form 4: for (iterableObject, work, arguments)
     * Future Note - form4 with an ES6 functionjob argument presents the possibility where, in a future version of DCP,
     * the protocol will support extremely large input sets without transferring the sets to the scheduler in their entirety.
     * Since these are ES6 function generators, the scheduler could request blocks of data from the client even while the client is ‘blocked’ in an await call,
     * without altering the API. This means DCP could process, for example,
     * jobs where the input set is a very long list of video frames and each slice represents one frame.
     * iterableObject could be an Array, ES6 function* generator, or any other type of iterable object.
     * @returns a Promise which will be fulfilled with a JobHandle object.
     * @param rangeObject: object | Ranges
     * @param work
     * @param arguments
     */
    for(rangeObject: object | Ranges, work: string, arguments: object): Promise<JobHandle>;

    /**
     * form 2a: for (start, end, step, work, arguments) - start, end, and step are numbers used to create a range object.
     * Otherwise, this is the same as form 1.
     * @returns a Promise which will be fulfilled with a JobHandle object.
     * @param start
     * @param end
     * @param step
     * @param work
     * @param arguments
     */
    for(start: number, end: number, step: number, work: string, arguments: object): Promise<JobHandle>;

    /**
     * form 2b: for (start, end, work, arguments) - exactly the same as form 2a, except step is always 1.
     * @returns a Promise which will be fulfilled with a JobHandle object.
     * @param start
     * @param end
     * @param step
     * @param work
     * @param arguments
     */
    for(start: number, end: number, step: number, work: string, arguments: object): Promise<JobHandle>;

    /**
     * form 2b: for (start, end, work, arguments) - exactly the same as form 2a, except step is always 1.
     * @returns a Promise which will be fulfilled with a JobHandle object.
     * @param start
     * @param end
     * @param step
     * @param work
     * @param arguments
     */
    for(start: number, end: number, step: number, work: string, arguments: object): Promise<JobHandle>;

    /**
     * Form 1: compute.status(job): returns a status object describing a given job.
     * The argument can be either a job Id or a Job Handle.
     * @returns a Promise which will be fulfilled with a JobHandle object.
     * @param job: jobId or JobHandle
     */
    status(job: jobId | JobHandle): Promise<JobHandle>;

    /**
     * Form 2: compute.status(paymentAccount, startTime, endTime): returns an array of status objects corresponding to the status of jobs deployed by the given payment account.
     * If startTime is specified, jobs older than this will not be listed. If endTime is specified,
     * jobs newer than this will not be listed. startTime and endTime can be either the number of milliseconds since the epoch, or instances of Date.
     * The paymentAccount argument can be a Keystore object, or any valid argument to the Keystore constructor (see: Wallet API).
     * @returns a Promise which will be fulfilled with a JobHandle object.
     * @param paymentAccount
     * @param startTime
     * @param endTime
     */
    status(paymentAccount: string, startTime: number, endTime: number): Promise<JobHandle>;

    /**
     * This async function accepts job Id as its argument and returns information and status of a job specified with jobID.
     * @returns a Promise which will be fulfilled with a JobInfo object.
     * @param jobId
     */
    getJobInfo(jobId: number): Promise<JobInfo>;

    /**
     * This async function accepts job Id as its argument and returns status and history of a slice(s) of the job specified with jobID.
     * @returns a Promise which will be fulfilled with a JobHistory object.
     * @param jobId
     */
    getSliceInfo(jobId: number): Promise<JobHistory>;

    /**
     * Form 1: compute.marketRate
     * Using marketRate as a property will use the most recent market rate for each slice
     * Form 2: compute.marketRate(factor = 1.0)
     * Calling marketRate as a function will cause the job to use the daily calculated rate, multiplied by the provided factor.
     * @param factor
     */
    marketRate(factor?: number): void;

    /**
     * This function returns a promise which is resolved with a signed WorkValueQuote object.
     * This object contains a digital signature which allows it to be used as a firm price quote during the characterization phase of the job lifecycle,
     * provided the job is deployed before the quoteExpiry and the CPUHour, GPUHour, InputMByte and OutputMByte fields are not modified.
     * This function ensures the client developer’s ability to control costs during job characterization,
     * rather than being completely at the mercy of the market. Note: Market rates are treated as spot prices, but are calculated as running averages.
     */
    getMarketValue(): Promise<WorkValueQuote>;

    /**
     * This function accepts as its arguments a SliceProfile object and a WorkValue object,
     * returning a number which describes the payment required to compute such a slice on a worker or in a market working at the rates described in the WorkValue object.
     * This function does not take into account job-related overhead.
     */
    calculateSlicePayment(sliceProfile: SliceProfile, workValue: WorkValue): Promise<number>;
}

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
