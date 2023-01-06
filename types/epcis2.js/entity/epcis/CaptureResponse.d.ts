export default class CaptureResponse {
    /**
     * You can only provide an already existing CaptureResponse
     * via Object
     * @param {Object} [captureResponse] - The object that will be used to create the epcisHeader
     * entity
     */
    constructor(captureResponse?: any);
    location: any;
    fetched: boolean;
    /**
     * Getter for the location
     * @return {string}
     */
    getLocation(): string;
    /**
     * Getter for the running property
     * @return {boolean}
     */
    getRunningStatus(): boolean;
    /**
     * Getter for the success property
     * @return {boolean}
     */
    getSuccessStatus(): boolean;
    /**
     * Getter for the errors property
     * @return {Array<string>}
     */
    getErrors(): Array<string>;
    /**
     * Getter for the error file property
     * @return {Object}
     */
    getErrorFile(): any;
    getCaptureJob(options?: {}): Promise<any>;
    success: any;
    errors: any;
    running: any;
    errorFile: any;
    /**
     * Fetch the capture job information until the running field is equal to false. Stop trying after
     * [nbRetry] tries.
     * @param {number} nbRetry - how much time should it fetch the capture job until aborted
     * @param {number} delay - the delay between each call, in ms (2000 by default)
     * @param {Object} options - the request options
     * @returns {Promise<void>}
     */
    pollForTheCaptureToFinish(nbRetry?: number, delay?: number, options?: any): Promise<void>;
}
