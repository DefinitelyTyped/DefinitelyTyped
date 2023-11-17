type URL = import(".").URL;
type DcpURL = import(".").DcpURL;
type Status = import(".").Status;
type WorkValueQuote = import(".").WorkValueQuote;
type WorkValue = import(".").WorkValue;
type PublicProperties = import(".").PublicProperties;
type Address = import("dcp/wallet").Address;
type Keystore = import("dcp/wallet").Keystore;

// In Node.js programs, calling `init()` injects `dcp/*` modules into the module cache.
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "dcp/compute" {
    export default interface Compute {
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
         * @param rangeObject object | Ranges
         * @param work Function | string | URL | DcpURL
         * @param arguments An optional Array-like object which contains arguments which are passed to the work function.
         * @returns A {@link JobHandle}.
         */
        for<T>(
            rangeObject: object | Ranges,
            work: object | string | URL | DcpURL | ((input: any, ...data: T[]) => any),
            arguments?: readonly T[],
        ): JobHandle;

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
        for(
            start: number,
            end: number,
            step: number,
            work: object | string | URL | DcpURL,
            arguments?: object,
        ): JobHandle;

        /**
         * form 2b: for (start, end, work, arguments) - exactly the same as form 2a, except step is always 1.
         * @returns a Promise which will be fulfilled with a JobHandle object.
         * @param start
         * @param end
         * @param step
         * @param work
         * @param arguments
         */
        for(
            start: number,
            end: number,
            step: number,
            work: object | string | URL | DcpURL,
            arguments?: object,
        ): JobHandle;

        /**
         * form 2b: for (start, end, work, arguments) - exactly the same as form 2a, except step is always 1.
         * @returns a Promise which will be fulfilled with a JobHandle object.
         * @param start
         * @param end
         * @param step
         * @param work: Function | string | URL | DcpURL
         * @param arguments
         */
        for(
            start: number,
            end: number,
            step: number,
            work: object | string | URL | DcpURL,
            arguments: object,
        ): JobHandle;

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

    /**
     * [See docs](https://docs.dcp.dev/api/compute/classes/job.html#methods)
     */
    class JobHandle {
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
         * Executes the function `listener` when the event `eventName` is triggered.
         * @param eventName A case-sensitive string representing the event type to listen for.
         * @param listener A function that is called when the specified event type occurs.
         * @event accepted: The job gets accepted by the DCP Scheduler.
         * @event complete: The job finishes.
         * @event readystatechange: Emitted leading up to deployment of the job.
         * @event console: Used to collect the console output of the workers.
         * @event result A slice completes and returns.
         */
        addEventListener(eventName: "readystatechange" | "resultsUpdated" | "cancel", listener: () => void): void;
        addEventListener(eventName: "accepted", listener: (event: { job: JobHandle }) => void): void;
        addEventListener(
            eventName: "result",
            listener: (event: {
                /**
                 * The address (id) of the the job.
                 */
                address: Address;
                /**
                 * The address of the task (slice) that the result came from.
                 */
                task: Address;
                /**
                 * The index of the slice.
                 */
                sort: number;
                result: {
                    request: "main";
                    /**
                     * The value returned.
                     */
                    result: any;
                };
            }) => void,
        ): void;
        addEventListener(eventName: "complete", listener: (event: ResultHandle) => void): void;
        addEventListener(
            eventName: "status",
            listener: (event: {
                /**
                 * The address (id) of the job.
                 */
                address: Address;
                /**
                 * Total number of slices.
                 */
                total: number;
                /**
                 * Number of slices that have been distributed.
                 */
                distributed: number;
                /**
                 * The job's run status before any updates from a status event.
                 */
                runStatus: string;
            }) => void,
        ): void;
        addEventListener(
            eventName: "error",
            listener: (event: {
                /**
                 * The address (id) of the job.
                 */
                address: Address;
                /**
                 * The index of the slice that threw the error.
                 */
                sliceIndex: number;
                /**
                 * The error message.
                 */
                message: string;
                /**
                 * The error's stack trace.
                 */
                stack: string;
                /**
                 * The error's name.
                 */
                name: string;
            }) => void,
        ): void;
        addEventListener(
            eventName: "console",
            listener: (event: {
                /**
                 * The address (id) of the job.
                 */
                address: Address;
                /**
                 * The index of the slice that threw the error.
                 */
                sliceIndex: number;
                /**
                 * The log level.
                 */
                level: "debug" | "info" | "log" | "warn" | "error";
                /**
                 * The console message.
                 */
                message: string;
            }) => void,
        ): void;
        addEventListener(
            eventName: "console",
            listener: (event: {
                /**
                 * The address (id) of the job.
                 */
                address: Address;
                /**
                 * The index of the slice that threw the error.
                 */
                sliceIndex: number;
                /**
                 * The log level.
                 */
                level: "debug" | "info" | "log" | "warn" | "error";
                /**
                 * The console message.
                 */
                message: string;
            }) => void,
        ): void;

        /**
         * Same as {@link JobHandle.addEventListener}
         */
        on: typeof JobHandle.prototype.addEventListener;
        /**
         * Same as {@link JobHandle.addEventListener}
         */
        addListener: typeof JobHandle.prototype.addEventListener;

        /**
         * Deploys the job to the scheduler for work to be done by distributed workers all throughout the DCP network.
         * @param slicePaymentOffer - The amount of DCC user is willing to pay per slice.
         * @param paymentAccountKeystore – Instance of Wallet API Keystore being used as the payment account for executing a job.
         * @param initialSliceProfile – Object describing the cost the user believes the average slice will incur in terms of CPU/GPU and I/O.
         * @returns Promise<ResultHandle>
         */
        exec(
            slicePaymentOffer?: number | object,
            paymentAccountKeystore?: Keystore,
            initialSliceProfile?: object,
        ): Promise<ResultHandle>;

        /**
         * Deploys the job for work to be done in locally in the client.
         * @param cores The number of local cores to be used to execute the job.
         * @param slicePaymentOffer The amount of DCC user is willing to pay per slice. However, localExec jobs don’t take DCC.
         * @param paymentAccountKeystore Instance of Wallet API Keystore being used as the payment account for executing a job.
         * @param initialSliceProfile Object describing the cost the user believes the average slice will incur in terms of CPU/CPU and I/O.
         * @returns The same result handle returned by `JobHandle.prototype.exec`.
         */
        localExec(
            cores?: number,
            slicePaymentOffer?: number | object,
            paymentAccountKeystore?: Keystore,
            initialSliceProfile?: object,
        ): Promise<ResultHandle>;

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
    class ResultHandle {
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
     * Range objects are vanilla ES objects used to describe value range sets for use by compute.for().
     * The range must be increasing, i.e. start must be less than end. Calculations made to derive the set of numbers in a range are carried out with BigNumber, eg.
     * arbitrary-precision, support. The numbers Infinity and -Infinity are not supported, and the API does not differentiate between +0 and -0.
     * An object which represents a range of values.
     * [See docs](https://docs.dcp.dev/api/compute/classes/range-object.html#rangeobject)
     */
    class RangeObject {
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
     * Range objects are vanilla ES objects used to describe value range sets for use by compute.for().
     * Calculations made to derive the set of numbers in a range are carried out with BigNumber, eg. arbitrary-precision, support.
     * The numbers Infinity and -Infinity are not supported, and the API does not differentiate between +0 and -0.
     * A multi-range object contains many {@link RangeObject}s.
     * They are iterated over with the fastest moving index going over the right-most range object in array order.
     * Each element of a multi range is a tuple of values from constituent ranges.
     * [See docs](https://docs.dcp.dev/api/compute/classes/multi-range-object.html#multirangeobject)
     */
    class MultiRangeObject {
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
     * Defines a consistent interface for each of the range object types to inherit from, provides some array methods.
     * [See docs](https://docs.dcp.dev/api/compute/classes/super-range-object.html#SuperRangeObject)
     */
    class SuperRangeObject {
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
     * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=ignorenoprogress#new-worker-options-object)
     */
    interface SandboxOptions {
        /**
         * When true, the sandbox will ignore errors from the sandbox not firing progress events.
         */
        ignoreNoProgress: boolean | false;
    }

    /**
     * [See docs](https://docs.dcp.dev/specs/worker-api.html?highlight=maximum%20number%20sandboxes%20can%20working%20one%20time#new-worker-options-object)
     */
    interface WorkerParams {
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
        identityKeystore?: Keystore;

        /**
         * @summary URL to use when connecting to the scheduler, defaults to dcpConfig.scheduler.location
         */
        schedulerURL?: string;

        /**
         * @summary When provided, this worker will only compute slices for the provided job. The job must have been deployed with the local exec flag set.
         */
        jobAddress?: string;
    }

    interface JobInfo {
        status: string;
        jobInfo: object;
    }

    interface JobHistory {
        status: string;
        history: object;
    }

    type jobId = number;
    type SliceProfile = object;

    interface Ranges {
        ranges: [];
    }
}
