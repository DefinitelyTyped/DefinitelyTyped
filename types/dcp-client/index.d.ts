// Type definitions for dcp-client 4.2
// Project: https://github.com/Distributed-Compute-Labs/dcp-client
// Definitions by: Bryan Hoang <https://github.com/bryan-hoang>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyType

export function init(): Promise<DCPClient>;

declare global {
    /**
     * Emits a progress event. Every work function must invoke this function.
     * If a progress event is not emitted within 30 seconds, the scheduler will throw an ENOPROGRESS error.
     * @param n An estimate between 0 and 1 (inclusive) of the ratio of work completed to the total amount of work that needs to be done for one slice.
     * This value must be between 6 significant digits and must always be increasing as more work is continuously being done.
     * @returns void | EnoProgressError
     */
    function progress(n?: string | number): void | EnoProgressError;
}

export namespace compute {
    interface Compute {
        /**
         * This function allows the client to cancel a running job. This function takes as its sole argument
         * a Job id and tells the scheduler to cancel the job.
         * This method returns a promise which is resolved once the scheduler acknowledges the cancellation
         * and has transitioned to a state where no further costs will be incurred as a result of the job.
         * @returns a Promise which will be fulfilled with an object.
         */
        cancel(): Promise<void>;

        /**
         * form 1: compute.do(work, arguments)
         * This function returns a JobHandle (an object which corresponds to a job), and accepts one or more arguments,
         * depending on form.
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
         * @param work: Function | string | URL | DcpURL
         * @param arguments
         */
        do(n: number, work: object | string | URL | DcpURL, arguments?: object): Promise<JobHandle>;

        /**
         * Form 1: for (rangeObject, work, arguments)
         * This form accepts a range object rangeObject, (see below) and this range object is used as part of the job on the scheduler.
         * What this means is that this form is very efficient, particularly for large ranges, as the iteration through the set happens on the scheduler,
         * and one item at a time. When the range has { start:0, step:1 }, the returned promise is resolved with an array of resultant values.
         * Otherwise, the returned promise is resolved with an object whose keys are the values in the range.
         * Form 3: for ({ ranges: [rangeObject, rangeObject...] }, work, arguments) Similar to form1,
         * except with a multi range object containing an array of range objects in the key ranges.
         * These are used to create multidimensional ranges, like nested loops. If they were written as traditional loops,
         * the outermost loop would be the leftmost range object, and the innermost loop would be the rightmost range object.
         * Form 4: for (iterableObject, work, arguments)
         * Future Note - form4 with an ES6 functionjob argument presents the possibility where, in a future version of DCP,
         * the protocol will support extremely large input sets without transferring the sets to the scheduler in their entirety.
         * Since these are ES6 function generators, the scheduler could request blocks of data from the client even while the client is ‘blocked’ in an await call,
         * without altering the API. This means DCP could process, for example,
         * jobs where the input set is a very long list of video frames and each slice represents one frame.
         * iterableObject could be an Array, ES6 function* generator, or any other type of iterable object.
         * @returns a Promise which will be fulfilled with a Job object.
         * @param rangeObject: object | Ranges
         * @param work: Function | string | URL | DcpURL
         * @param arguments
         */
        for(rangeObject: object | Ranges, work: object | string | URL | DcpURL, arguments?: object): Job;

        /**
         * form 2a: for (start, end, step, work, arguments) - start, end, and step are numbers used to create a range object.
         * Otherwise, this is the same as form 1.
         * @returns a Promise which will be fulfilled with a JobHandle object.
         * @param start
         * @param end
         * @param step
         * @param work: Function | string | URL | DcpURL
         * @param arguments
         */
        for(start: number, end: number, step: number, work: object | string | URL | DcpURL, arguments?: object): Job;

        /**
         * form 2b: for (start, end, work, arguments) - exactly the same as form 2a, except step is always 1.
         * @returns a Promise which will be fulfilled with a JobHandle object.
         * @param start
         * @param end
         * @param step
         * @param work
         * @param arguments
         */
        for(start: number, end: number, step: number, work: object | string | URL | DcpURL, arguments?: object): Job;

        /**
         * form 2b: for (start, end, work, arguments) - exactly the same as form 2a, except step is always 1.
         * @returns a Promise which will be fulfilled with a JobHandle object.
         * @param start
         * @param end
         * @param step
         * @param work: Function | string | URL | DcpURL
         * @param arguments
         */
        for(start: number, end: number, step: number, work: object | string | URL | DcpURL, arguments: object): Job;

        /**
         * Form 1: compute.status(job): returns a status object describing a given job.
         * The argument can be either a job Id or a Job Handle.
         * @returns Returns the status of jobs deployed to the scheduler with information including: deployTime,
         * endTime, lastSliceNumber, link, name, nextSliceNumber, ownerAddress, paymentAccount, status, uuid and jobAddress
         * @param job jobId or JobHandle
         */
        status(job: jobId | JobHandle): Status | Status[];

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
        status(startTime: number, endTime: number, paymentAccount: Keystore): JobHandle;

        /**
         * This async function accepts job Id as its argument and returns information and status of a job specified with jobID.
         * @returns a JobInfo object.
         * @param jobId
         */
        getJobInfo(jobId: number): JobInfo;

        /**
         * This async function accepts job Id as its argument and returns status and history of a slice(s) of the job specified with jobID.
         * @returns a JobHistory object.
         * @param jobId
         */
        getSliceInfo(jobId: number): JobHistory;

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
        getMarketValue(): WorkValueQuote;

        /**
         * This function accepts as its arguments a SliceProfile object and a WorkValue object,
         * returning a number which describes the payment required to compute such a slice on a worker or in a market working at the rates described in the WorkValue object.
         * This function does not take into account job-related overhead.
         */
        calculateSlicePayment(sliceProfile: SliceProfile, workValue: WorkValue): number;
    }
}

export namespace wallet {
     interface Wallet {
        /**
         * [See docs](https://docs.dcp.dev/specs/wallet-api.html#wallet-api)
         * Gets a keystore from the wallet
         * @returns a Promise which will be fulfilled with a AuthKeystore object.
         * @param options AuthKeystoreOptions
         */
        get(options: AuthKeystoreOptions): Promise<AuthKeystore>;

        /**
         * This function behaves exactly the same as get(),
         * except its default keystore file is the id keystore instead of the default keystore.
         */
        getId(): Promise<number>;

        /**
         * This function will add the provided keystore to the wallet API internal cache,
         * which will return the same keystore when get is called with the same name.
         *  @param keystore Keystore
         *  @param name string = ‘default’
         */
        add(keystore: Keystore, name: string): Promise<number>;

        /**
         * This function will clear the wallet API’s internal keystore cache.
         * @param keystore Keystore
         */
        addId(keystore: Keystore): Promise<number>;

        /**
         * This function will clear the wallet API’s internal keystore cache.
         */
        clear(): Promise<void>;

        /**
         * Gets a keystore from the disk
         * @returns a Promise which will be fulfilled with a AuthKeystore object.
         * @param options LoadOptions
         */
        load(options: LoadOptions): Promise<LoadResult>;
    }
}

export namespace worker {
     class Worker {
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
}

/**
 * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=string%20representation%20dcc%20value%20paid%20out#events)
 */
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

/**
 * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=maxworkingsandboxes%20number#sandbox-api)
 */
export interface Sandbox {
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

/**
 * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=maxworkingsandboxes%20number#schedmsg-commands)
 */
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

/**
 * Range objects are vanilla ES objects used to describe value range sets for use by compute.for().
 * Calculations made to derive the set of numbers in a range are carried out with BigNumber, eg. arbitrary-precision, support.
 * The numbers Infinity and -Infinity are not supported, and the API does not differentiate between +0 and -0.
 * A multi-range object contains many {@link RangeObject}s.
 * They are iterated over with the fastest moving index going over the right-most range object in array order.
 * Each element of a multi range is a tuple of values from constituent ranges.
 * [See docs](https://docs.dcp.dev/api/compute/classes/multi-range-object.html#multirangeobject)
 */
export class MultiRangeObject {
    /**
     * Returns a tuple of values from the ranges given by this multi range object.
     * @param arg – First range object, or array of range objects, or object with ranges key containing an array of range objects.
     * @param range – If first argument is a RangeObject, subsquent arguments are range objects too.
     * @returns instance of MultiRangeObject
     */
    constructor(arg: RangeObject | RangeObject[] | object, range: RangeObject);

    /**
     * See SuperRangeObject.filter()
     * @returns any[]
     */
    filter(...args: any): any[];

    /**
     * See SuperRangeObject.slice()
     * @returns any[]
     */
    slice(...args: any): any[];

    /**
     * Returns a tuple of values from the ranges given by this multi range object.
     * @param n – index of multi-range tuple to return
     * @returns any
     */
    nthValue(n: number): any;

    /**
     * Create string representation of this MultiRangeObject
     * @returns object
     */
    toString(): object;

    /**
     * Create object literal with ranges property containing array of range objects.
     * @returns object
     */
    toObject(): object;
}

/**
 * Range objects are vanilla ES objects used to describe value range sets for use by compute.for().
 * The range must be increasing, i.e. start must be less than end. Calculations made to derive the set of numbers in a range are carried out with BigNumber, eg.
 * arbitrary-precision, support. The numbers Infinity and -Infinity are not supported, and the API does not differentiate between +0 and -0.
 * An object which represents a range of values.
 * [See docs](https://docs.dcp.dev/api/compute/classes/range-object.html#rangeobject)
 */
export class RangeObject {
    /**
     * Number of elements in range, or number of groups if grouped.
     */
    length: number;

    /**
     * Returns a tuple of values from the ranges given by this multi range object.
     * @param startOrObject – Beginning of range, or object literal with start and end properties.
     * @param end – End of range
     * @param step – Step size in range
     * @param group – Groups in range
     * @returns Promise<void>
     */
    constructor(startOrObject: number | object, end: number, step?: number, group?: number | object);

    /**
     * See SuperRangeObject.filter()
     * @returns any[]
     */
    filter(...args: any): any[];

    /**
     * See SuperRangeObject.slice()
     * @returns any[]
     */
    slice(...args: any): any[];

    /**
     * Returns a tuple of values from the ranges given by this multi range object.
     * @param n – index of multi-range tuple to return
     * @returns Return nth value in range
     */
    nthValue(n: number): any;

    /**
     * Create string representation of range: [object RangeObject start,end,step,group]
     * @returns string
     */
    toString(): string;

    /**
     * Create object literal for range with properties: start, end, step, and group.
     * @returns object
     */
    toObject(): object;
}

/**
 * Defines a consistent interface for each of the range object types to inherit from, provides some array methods.
 * [See docs](https://docs.dcp.dev/api/compute/classes/super-range-object.html#SuperRangeObject)
 */
export class SuperRangeObject {
    /**
     * Converts range to an Array and then calls filter(…args) on it.
     * @returns any[]
     */
    filter(...args: any): any[];

    /**
     * See SuperRangeObject.slice()
     * @param start – index to start slice
     * @param end – index to end slice, return rest of array if not provided.
     * @returns any[]
     */
    slice(start: number, end: number): any[];
}

/**
 * This class represents an Array-like object that’s a handle on a job’s results.
 * It’s used to access the job’s results, or to query the scheduler to fetch results.
 * Besides the properties and methods of this class, the following standard array
 * methods are also available for accessing the available results: slice, filter, concat, find, findIndex, indexOf, map,
 * reduce, includes, toString, and forEach. One can access the results by index (results[i]),
 * but the class throws an error if the result for that index isn’t yet available.
 * Instantiated by Job() methods Job.exec() and Job.localExec().
 * [See docs](https://docs.dcp.dev/api/compute/classes/result-handle.html#resulthandle)
 */
export class ResultHandle {
    /**
     * The length of the array of available results.
     */
    length: number;

    /**
     * Returns an array of [input, output] pairs, in the order of the slice numbers.
     * Each input is paired with its associated output produced from the slice it was used in.
     * Return value is undefined if the input is not an ES5 primitive.
     * @returns void
     */
    entries(): any[];

    /**
     * Returns an array of [input, output] pairs, in the order of the slice numbers.
     * Each input is paired with its associated output produced from the slice it was used in.
     * Return value is undefined if the input is not an ES5 primitive.
     * @param rangeObject – Not implemented, leave as undefined - should be a RangeObject() to query results, however.
     * @param emitEvents - If set to ‘all’, emits a results for each result as they’re added to the ResultHandle() object.
     * @returns any[]
     */
    fetch(rangeObject: RangeObject, emitEvents: string): any[];

    /**
     * Returns the nth input value in the input set.
     * @param n – index of the desired input value in the input set.
     * @returns any
     */
    key(n: number): any;

    /**
     * Returns an array of all input values that have a completed result available.
     * @returns any[]
     */
    keys(): any[];

    /**
     * Returns an array of all input values that have a completed result available.
     * @param key – Corresponds to a value in the job’s input set.
     * @returns any
     */
    lookupValue(key: any): any;

    /**
     * Results an array of all results received from the scheduler.
     * @returns any[]
     */
    values(): any[];
}

/**
 * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=ignorenoprogress#new-worker-options-object)
 */
export class SandboxOptions {
    /**
     * When true, the sandbox will ignore errors from the sandbox not firing progress events.
     */
    ignoreNoProgress: boolean | false;
}

/**
 * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=maximum%20number%20sandboxes%20can%20working%20one%20time#new-worker-options-object)
 */
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

export interface PublicProperties {
    /**
     * Public-facing name of the job.
     */
    name: string;

    /**
     * Public-facing description of the job.
     */
    description: string;

    /**
     * Public-facing link to an external resource about the job.
     */
    link: string;
}

/**
 * [See docs](https://docs.dcp.dev/api/compute/classes/job.html#methods)
 */
export class Job {
    /**
     * Job id
     * Note: The job id is a getter for job address.
     */
    id: string;

    /**
     * Job address
     */
    address: string;

    /**
     * An object to store public-facing attributes of a job. Anything stored in this object will be available for use inside the work function.
     * Properties of this object can be seen by the worker in order to display what job it is currently working on.
     */
    public: PublicProperties;

    /**
     * Setting Job.useStrict true runs the work function in the strict mode.
     */
    useStrict: boolean;

    /**
     * @accepted - Emitted when the job gets accepted by the DCP Scheduler.
     * @complete - Emitted when the job finishes.
     * @readystatechange - Emitted leading up to deployment of the job.
     * @console - Used to collect the console output of the workers.
     * @result - Emitted when a slice completes and returns.
     */
    on(event: "accepted" | "complete" | "readystatechange" | "console" | "result", listener: (ev?: any) => void): this;

    /**
     * Deploys the job to the scheduler for work to be done by distributed workers all throughout the DCP network.
     * @param slicePaymentOffer - The amount of DCC user is willing to pay per slice.
     * @param paymentAccountKeystore – Instance of Wallet API Keystore being used as the payment account for executing a job.
     * @param initialSliceProfile – Object describing the cost the user believes the average slice will incur in terms of CPU/GPU and I/O.
     * @returns Promise<ResultHandle>
     */
    exec(slicePaymentOffer?: number | object, paymentAccountKeystore?: Keystore, initialSliceProfile?: object): Promise<ResultHandle>;

    /**
     * Deploys the job for work to be done in locally in the client.
     * @param cores – The number of local cores to be used to execute the job.
     * @param slicePaymentOffer – The amount of DCC user is willing to pay per slice. However, localExec jobs don’t take DCC.
     * @param paymentAccountKeystore – Instance of Wallet API Keystore being used as the payment account for executing a job.
     * @param initialSliceProfile – Object describing the cost the user believes the average slice will incur in terms of CPU/CPU and I/O.
     * @returns Promise<ResultHandle>
     */
    localExec(cores: number, slicePaymentOffer: number | object, paymentAccountKeystore: Keystore, initialSliceProfile: object): Promise<ResultHandle>;

    /**
     * Deploys the job for work to be done in locally in the client.
     * @param reason string – The reason for job cancellation, sent to client if provided.
     * @returns Promise<void>
     */
    cancel(reason: string): Promise<void>;

    /**
     * Resumes the job.
     * @returns Promise<void>
     */
    resume(reason: string): Promise<void>;

    /**
     * Resumes the job.
     * modulePaths should not have .js extension at the end of the path. For more information on moduleIdentifiers, view the CommonJs specification in
     * [See docs](https://wiki.commonjs.org/wiki/Modules/1.1#Module_Identifiers)
     * @param modulePaths – Either a string or a list of strings that represent the module dependency path.
     * @returns Promise<void>
     */
    requires(modulePaths: string | string[]): Promise<void>;
}

export type URL = string;
export type DcpURL = object | string;
export type jobId = number;
export type SliceProfile = object;

export interface LoadResult {
    keystore: Keystore;
    safe: boolean | false;
}

export interface Ranges {
    ranges: [];
}

export interface DCPClient {
    compute: compute.Compute;
    wallet: wallet.Wallet;
    worker: worker.Worker;
}

export class Status {
}

export class JobInfo {
    status: string;
    jobInfo: object;
}

export class JobHistory {
    status: string;
    history: object;
}

export class WorkValueQuote {
}

export class WorkValue {
}

export class EnoProgressError implements Error {
    name: string;
    stack?: string | undefined;
    message: string;
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

export class Supervisor {}

export class Keystore {
    id: number;
}

export interface Address {
    account: string;
}

export class AuthKeystore extends Keystore {}

export class JobHandle extends Job {}
