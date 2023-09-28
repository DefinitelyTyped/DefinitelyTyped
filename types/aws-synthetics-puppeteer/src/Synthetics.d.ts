// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "Synthetics" {
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
        _canaryName: string;
        _canaryId: string;
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
         */
        setRequestResponseLogHelper(): RequestResponseLogHelper;
        getRequestResponseLogHelper(): RequestResponseLogHelper;
        setLogLevel(logLevel: number): void;
        getLogLevel(): number;
        getStepErrors(): any[];
        addUserAgent(page: localPuppeteer.Page, userAgentString: string): Promise<void>;
        /**
         * On Lambda warm starts, we might have the same NodeJS process running with this same instantiated class
         * already created. Reset all the this._* variables that should be reset between Lambda invocations.
         * You could also .reset() Synthetics in the middle of an invocation if you liked.
         */
        reset(): Promise<void>;
        createCanaryArn(
            awsPartition: string,
            region: string,
            awsAccountId: string,
            canaryName: string,
            canaryId?: string,
        ): string;
        setEventAndContext(event: any, context: any): Promise<void>;
        setVerboseLogging(verboseLogging: boolean): void;
        getCanaryName(): string;
        getCanaryId(): string;
        getCanaryArn(): string;
        getCanaryUserAgentString(): string;
        getRuntimeVersion(): string;
        getPage(): localPuppeteer.Page;
        getUrl(): string;
        /**
         * Returns global syntheticsConfiguration instance.
         */
        getConfiguration(): SyntheticsConfiguration;
        /**
         *  Takes screenshot of current page and uploads it to S3
         *  @returns fileName and page url of screenshot
         */
        takeScreenshot(stepName: string, suffix?: string): Promise<ScreenshotResult>;
        getScreenshotResult(stepName: string): ScreenshotResult[];
        addReport(report: any): void;
        /**
         * Executes the provided step, wrapping it with start/pass/fail logging, start/pass/fail screenshots, and pass/fail and duration metrics.
         * The executeStep function also does the following:
         * * Logs that the step started.
         * * Takes a screenshot named <stepName>-starting.
         * * Starts a timer.
         * * Executes the provided function.
         * * If the function returns normally, it counts as passing. If the function throws, it counts as failing.
         * * Ends the timer.
         * * Logs whether the step passed or failed
         * * Takes a screenshot named <stepName>-succeeded or <stepName>-failed.
         * * Emits the stepName SuccessPercent metric, 100 for pass or 0 for failure.
         * * Emits the stepName Duration metric, with a value based on the step start and end times.
         * * Finally, returns what the functionToExecute returned or re-throws what functionToExecute threw.
         * @param stepConfig Optional Step config key-value pairs
         */
        executeStep<Return = void>(
            stepName: string,
            functionToExecute: () => Promise<Return>,
            stepConfig?: any,
        ): Promise<Return>;
        publishStepResult(
            result: any,
            startTime: Date,
            endTime: Date,
            stepName: string,
            canaryStepResult: any,
            stepConfiguration: any,
        ): Promise<void>;
        /**
         * Log step start with current url, take step start screen shot
         */
        startStep(stepName: string, stepConfiguration: any, canaryStepResult: any): Promise<void>;
        /**
         * Log step succeeded with current url, take step succeeded screen shot
         * @param stepName
         */
        succeedStep(stepName: string, stepConfiguration: any): Promise<void>;
        /**
         * Log step failed with current url and exception, take step failed screen shot
         * @param stepName
         * @param error
         */
        failStep(stepName: string, error: any, stepConfiguration: any): Promise<void>;
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
         * @param stepConfig Optional Step config key-value pairs
         */
        executeHttpStep(stepName: string | null, requestOptions?: any, callback?: any, stepConfig?: any): Promise<void>;
        completeHttpStep(
            stepName: string,
            stepId: string,
            stepStatus: any,
            failureReason: any,
            stepStartTime: any,
            stepEndTime: any,
            canaryStepResult: any,
            stepConfiguration: any,
        ): Promise<void>;
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
        publishResult(
            result: any,
            startTime: Date,
            endTime: Date,
            stepName: string,
            stepConfiguration: any,
        ): Promise<boolean>;
        uploadArtifacts(artifacts: any): Promise<void>;
        beforeCanary(): Promise<void>;
        beforeScript(): Promise<void>;
        createExecutionReport(
            canaryStatus: any,
            canaryError: any,
            metricsPublished: any,
            startTime?: Date,
            endTime?: Date,
            resetTime?: number,
            setupTime?: number,
            launchTime?: number,
        ): Promise<void>;
        afterCanary(
            canaryStatus: any,
            canaryError: any,
            startTime?: Date,
            endTime?: Date,
            resetTime?: number,
            setupTime?: number,
            launchTime?: number,
        ): Promise<string>;
        getErrorString(error: Error | string): string;
        getReturnValue(
            canaryStatus: any,
            canaryError: any,
            startTime?: Date,
            endTime?: Date,
            resetTime?: number,
            setupTime?: number,
            launchTime?: number,
        ): string;
    }
    import * as localPuppeteer from "puppeteer";
    import * as RequestResponseLogHelper_1 from "RequestResponseLogHelper";
    import RequestResponseLogHelper = RequestResponseLogHelper_1.RequestResponseLogHelper;
    import * as SyntheticsMetricEmitter_1 from "SyntheticsMetricEmitter";
    import SyntheticsMetricEmitter = SyntheticsMetricEmitter_1.SyntheticsMetricEmitter;
    import { RequestsResult, ScreenshotResult, SyntheticsReport } from "SyntheticsReport";
    import { SyntheticsConfiguration } from "SyntheticsConfiguration";
}
