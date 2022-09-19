import { JobHandle, JobHistory, jobId, JobInfo, Ranges, SliceProfile, WorkValue, WorkValueQuote } from "../index";

export interface Compute {
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
    do(n: number, arguments: object): Promise<JobHandle> ;

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
