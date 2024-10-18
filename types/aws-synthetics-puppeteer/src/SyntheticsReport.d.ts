// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "SyntheticsReport" {
    /**
     * Synthetics report Library for creating canary execution report.
     * This report is generated and uploaded to S3 bucket by Synthetics.
     */
    export class SyntheticsReport {
        canaryName: any;
        startTime: any;
        endTime: any;
        timeSpentInResetInMs: any;
        timeSpentInLaunchInMs: any;
        timeSpentInSetUpInMs: any;
        executionStatus: string;
        executionError: any;
        customerScript: CanaryResult;
        configuration: {};
        withStartTime(startTime: any): SyntheticsReport;
        withEndTime(endTime: any): SyntheticsReport;
        withCanaryName(canaryName: any): SyntheticsReport;
        withTimeSpentInReset(timeSpentInResetInMs: any): SyntheticsReport;
        withTimeSpentInLaunch(timeSpentInLaunchInMs: any): SyntheticsReport;
        withTimeSpentInSetUp(timeSpentInSetUpInMs: any): SyntheticsReport;
        withCanaryResult(canaryResult: any): SyntheticsReport;
        withExecutionStatus(status: any): SyntheticsReport;
        withExecutionError(error: any): SyntheticsReport;
        addReport(report: any): void;
        addStep(stepResult: any): void;
        getStartTime(): any;
        getEndTime(): any;
        getCanaryName(): any;
        getTimeSpentInReset(): any;
        getTimeSpentInLaunch(): any;
        getTimeSpentInSetUp(): any;
        getCanaryResult(): CanaryResult;
        getReports(): any[];
        withConfiguration(configuration: any): void;
        getConfiguration(): {};
        reset(): void;
    }
    export class CanaryResult {
        startTime: any;
        endTime: any;
        status: string;
        failureReason: any;
        metricsPublished: boolean;
        requests: RequestsResult;
        steps: any[];
        reports: any[];
        withStartTime(startTime: any): CanaryResult;
        withEndTime(endTime: any): CanaryResult;
        withCanaryStatus(status: any): CanaryResult;
        withFailureReason(failureReason: any): CanaryResult;
        withStepsResult(stepResult: any): CanaryResult;
        withMetricsPublished(metricsPublished: any): CanaryResult;
        withRequestsResult(requestsResult: any): CanaryResult;
        addReport(report: any): void;
        addStep(stepResult: any): CanaryResult;
        getStartTime(): any;
        getEndTime(): any;
        getStatus(): string;
        getFailureReason(): any;
        getStepsResult(): any[];
        getReports(): any[];
        reset(): void;
    }
    export class HttpStepResult extends CanaryStepResult {
        httpRequestNum: any;
        withHttpRequestNum(httpRequestNum: any): HttpStepResult;
        getHttpRequestNum(): any;
    }
    export class StepResult extends CanaryStepResult {
        sourceUrl: any;
        destinationUrl: any;
        screenshots: any[];
        withSourceUrl(sourceUrl: any): StepResult;
        withDestinationUrl(destinationUrl: any): StepResult;
        withScreenshotResult(screenshots: any): StepResult;
        getSourceUrl(): any;
        getDestinationUrl(): any;
        getScreenshots(): any[];
    }
    export class RequestsResult {
        failed: number;
        _2xx: number;
        _4xx: number;
        _5xx: number;
        _3xx: number;
        incrementSuccessfulRequests(): void;
        incrementFailedRequests(): void;
        incrementErrorRequests(): void;
        incrementFaultRequests(): void;
        incrementRedirectedRequests(): void;
        getSuccessfulRequests(): number;
        getFailedRequests(): number;
        getErrorRequests(): number;
        getFaultRequests(): number;
        getRedirectedRequests(): number;
        reset(): void;
    }
    export class ScreenshotResult {
        fileName: any;
        pageUrl: any;
        error: any;
        withFileName(fileName: any): ScreenshotResult;
        withPageUrl(pageUrl: any): ScreenshotResult;
        withError(error: any): ScreenshotResult;
        getFileName(): any;
        getPageUrl(): any;
        getError(): any;
    }
    export namespace ExecutionStatus {
        const PASS_RESULT: string;
        const FAIL_RESULT: string;
        const NO_RESULT: string;
    }
    export namespace CanaryStatus {
        export const PASSED: string;
        export const FAILED: string;
        const NO_RESULT_1: string;
        export { NO_RESULT_1 as NO_RESULT };
    }
    class CanaryStepResult {
        stepNum: any;
        stepName: any;
        startTime: any;
        endTime: any;
        status: any;
        failureReason: any;
        metricsPublished: boolean;
        withStepNum(stepNum: any): CanaryStepResult;
        withStepName(stepName: any): CanaryStepResult;
        withStartTime(startTime: any): CanaryStepResult;
        withEndTime(endTime: any): CanaryStepResult;
        withStepStatus(stepStatus: any): CanaryStepResult;
        withFailureReason(failureReason: any): CanaryStepResult;
        withMetricsPublished(metricsPublished: any): CanaryStepResult;
        getStepNum(): any;
        getStepName(): any;
        getStartTime(): any;
        getEndTime(): any;
        getStatus(): any;
        getFailureReason(): any;
        getMetricsPublished(): boolean;
    }
    export {};
}
