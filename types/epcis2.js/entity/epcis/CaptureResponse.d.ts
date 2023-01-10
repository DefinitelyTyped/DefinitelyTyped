export default class CaptureResponse {
    /**
     * You can only provide an already existing CaptureResponse
     * via Object
     * @param [captureResponse] - The object that will be used to create the epcisHeader
     * entity
     */
    constructor(captureResponse?: any);
    location: any;
    fetched: boolean;
    /**
     * Getter for the location
     */
    getLocation(): string;
    /**
     * Getter for the running property
     */
    getRunningStatus(): boolean;
    /**
     * Getter for the success property
     */
    getSuccessStatus(): boolean;
    /**
     * Getter for the errors property
     */
    getErrors(): string[];
    /**
     * Getter for the error file property
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
     * @param nbRetry - how much time should it fetch the capture job until aborted
     * @param delay - the delay between each call, in ms (2000 by default)
     * @param options - the request options
     */
    pollForTheCaptureToFinish(nbRetry?: number, delay?: number, options?: any): Promise<void>;
}
