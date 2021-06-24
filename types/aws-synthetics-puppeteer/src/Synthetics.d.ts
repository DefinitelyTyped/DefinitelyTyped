declare module 'Synthetics' {
    const _exports: Synthetics;
    export = _exports;
    /**
     * The Synthetics library for Synthetics UI canaries.
     *
     * This API serves as a contract between the Synthetics UI canary service and external canary writers.
     *
     * This API must remain backwards compatible forever.
     *
     * The primary behavior of this library is to act like a JUnit or TestNG test running framework combined with a
     * Puppeteer browser launcher to facilitate monitoring UIs using custom health checks run from AWS Lambdas
     * on a continuous and scheduled basis. (Managed UI Canaries)
     */
    class Synthetics {
        constructor(verboseLogging?: boolean);
        ARN_SERVICE_NAME: string;
        USER_AGENT_SERVICE_NAME_PREFIX: string;
        _canaryArn: string;
        _canaryName: any;
        _canaryId: any;
        _canaryRunId: any;
        _canaryUserAgentString: string;
        _s3BaseFilePath: any;
        _artifactLocation: string;
        _stepErrors: any[];
        _executionStatus: string;
        _executionError: any;
        _har: any;
        _harRegion: string;
        _verboseLogging: boolean;
        _page: localPuppeteer.Page;
        _browser: localPuppeteer.Browser;
        _requestResponseLogHelper: RequestResponseLogHelper;
        _metricEmitter: SyntheticsMetricEmitter;
        _syntheticsReport: SyntheticsReport;
        _requestsResult: RequestsResult;
        _uiCanary: boolean;
        _stepCount: number;
        _invocationTime: Date;
        _artifactUploadError: any;
        _harContent: any;
        _syntheticsConfiguration: SyntheticsConfiguration;
        _stoppedAtStepFailure: boolean;
        _stepResultMap: {};
        _stepScreenshotMap: {};
        /**
         * Use as a builder pattern for setting the request/response logging flags
         * Example: setRequestResponseLogHelper().withLogRequestHeaders(true).withLogResponseHeaders(true);
         * @returns {RequestResponseLogHelper}
         */
        setRequestResponseLogHelper(): RequestResponseLogHelper;
        getRequestResponseLogHelper(): RequestResponseLogHelper;
        setLogLevel(logLevel: any): void;
        getLogLevel(): number;
        getStepErrors(): any[];
        addUserAgent(page: any, userAgentString: any): Promise<void>;
        /**
         * On Lambda warm starts, we might have the same NodeJS process running with this same instantiated class
         * already created. Reset all the this._* variables that should be reset between Lambda invocations.
         * You could also .reset() Synthetics in the middle of an invocation if you liked.
         */
        reset(): Promise<void>;
        createCanaryArn(awsPartition: any, region: any, awsAccountId: any, canaryName: any, canaryId: any): string;
        setEventAndContext(event: any, context: any): Promise<void>;
        setVerboseLogging(verboseLogging: any): void;
        getCanaryName(): any;
        getCanaryId(): any;
        getCanaryArn(): string;
        getCanaryUserAgentString(): string;
        getRuntimeVersion(): string;
        getPage(): localPuppeteer.Page;
        getUrl(): string;
        /**
         * Returns global syntheticsConfiguration instance.
         * @returns Object.<syntheticsConfiguration>
         */
        getConfiguration(): SyntheticsConfiguration;
        /**
         *  Takes screenshot of current page and uploads it to S3
         *  @returns {ScreenshotResult} - fileName and page url of screenshot
         */
        takeScreenshot(stepName: any, suffix: any): any;
        getScreenshotResult(stepName: any): import("SyntheticsReport").ScreenshotResult[];
        addReport(report: any): void;
        /**
         * Execute the provided step, wrapping it with start/succeed/fail logging, screen shots, metrics
         * and eventually events
         *
         * Log start, screen shot,
         * start timer,
         * execute function,
         * then end timer (pass or fail),
         * log pass/fail, screen shot pass/fail,
         * emit pass/fail metrics, events, and step duration metrics,
         * then return returnValue on success and throw exception on fail
         * @param stepName
         * @param functionToExecute
         * @param stepConfig Optional Step config key-value pairs
         * @returns {Promise<*>}
         */
        executeStep(stepName: any, functionToExecute: any, stepConfig?: any): Promise<any>;
        publishStepResult(result: any, startTime: Date, endTime: Date, stepName: any, canaryStepResult: any, stepConfiguration: any): Promise<void>;
        /**
         * Log step start with current url, take step start screen shot
         * @param stepName
         * @returns {Promise<void>}
         */
        startStep(stepName: any, stepConfiguration: any, canaryStepResult: any): Promise<void>;
        /**
         * Log step succeeded with current url, take step succeeded screen shot
         * @param stepName
         * @returns {Promise<void>}
         */
        succeedStep(stepName: any, stepConfiguration: any): Promise<void>;
        /**
         * Log step failed with current url and exception, take step failed screen shot
         * @param stepName
         * @param error
         * @returns {Promise<void>}
         */
        failStep(stepName: any, error: any, stepConfiguration: any): Promise<void>;
        getHttpRequestOptions(requestOptions: any): any;
        /**
         * Execute HTTP step using provided request configuration with start/succeed/fail logging and metrics
         *
         * Logs start timer,
         * Invoke http or https module request function based on protocol
         * End timer when response/error is received
         * Invokes passed callback funtion if provided, else invokes default callback.
         * Log pass/fail, add reporting configuration,
         * Emits pass/fail metrics, events, and step duration metrics,
         *
         * @param stepName Name of the step. If null, step name will be constructed based on the request
         * @param requestOptions, {String | URL | Object} Can be url string, URL object or Node http/https module request options,
         *        See https://nodejs.org/api/http.html#http_http_request_url_options_callback.
         *        Pass request data using aditional 'body' parameter in options
         * @param callback Function is invoked with response <http.IncomingMessage> received from http call.
         * @param stepConfig {Object} Optional Step config key-value pairs
         * @returns {Promise<void>}
         */
        executeHttpStep(stepName: any, requestOptions: any, callback?: any, stepConfig?: any): Promise<void>;
        completeHttpStep(stepName: any, stepId: any, stepStatus: any, failureReason: any, stepStartTime: any, stepEndTime: any, canaryStepResult: any, stepConfiguration: any): Promise<void>;
        setupPageEvents(page: any): Promise<void>;
        addExecutionError(errorMessage: any, ex: any): void;
        writeHar(): Promise<void>;
        setHarContent(harContent: any): void;
        close(): Promise<void>;
        isLambdaExecutionEnv(): boolean;
        getDefaultLaunchOptions(): Promise<{
            args: string[];
            defaultViewport: Required<{
                width?: number;
                height?: number;
                deviceScaleFactor?: number;
                isMobile?: boolean;
                hasTouch?: boolean;
                isLandscape?: boolean;
            }>;
            headless: boolean;
        }>;
        getLaunchOptions(options: any): Promise<any>;
        launch(options?: {}): Promise<void>;
        publishResult(result: any, startTime: Date, endTime: Date, stepName: any, stepConfiguration: any): Promise<boolean>;
        uploadArtifacts(artifacts: any): Promise<void>;
        beforeCanary(): Promise<void>;
        beforeScript(): Promise<void>;
        createExecutionReport(canaryStatus: any, canaryError: any, metricsPublished: any, startTime?: Date, endTime?: Date, resetTime?: number, setupTime?: number, launchTime?: number): Promise<void>;
        afterCanary(canaryStatus: any, canaryError: any, startTime?: Date, endTime?: Date, resetTime?: number, setupTime?: number, launchTime?: number): Promise<string>;
        getErrorString(error: any): any;
        getReturnValue(canaryStatus: any, canaryError: any, startTime?: Date, endTime?: Date, resetTime?: number, setupTime?: number, launchTime?: number): string;
    }
    import localPuppeteer = require("puppeteer");
    import RequestResponseLogHelper_1 = require("RequestResponseLogHelper");
    import RequestResponseLogHelper = RequestResponseLogHelper_1.RequestResponseLogHelper;
    import SyntheticsMetricEmitter_1 = require("SyntheticsMetricEmitter");
    import SyntheticsMetricEmitter = SyntheticsMetricEmitter_1.SyntheticsMetricEmitter;
    import { SyntheticsReport } from "SyntheticsReport";
    import { RequestsResult } from "SyntheticsReport";
    import { SyntheticsConfiguration } from "SyntheticsConfiguration";
}
