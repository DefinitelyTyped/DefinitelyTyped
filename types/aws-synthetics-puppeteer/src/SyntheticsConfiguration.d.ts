// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "SyntheticsConfiguration" {
    /**
     * Class to configure parameters in Synthetics
     */
    class SyntheticsConfiguration {
        reset(): void;
        screenshotConfiguration: {
            screenshotOnStepStart: boolean;
            screenshotOnStepSuccess: boolean;
            screenshotOnStepFailure: boolean;
        };
        reportingConfiguration: {
            includeRequestHeaders: boolean;
            includeResponseHeaders: boolean;
            restrictedHeaders: any[];
            includeRequestBody: boolean;
            includeResponseBody: boolean;
        };
        executionConfiguration: {
            continueOnStepFailure: boolean;
            continueOnHttpStepFailure: boolean;
        };
        stepMetricsConfiguration: {
            stepSuccessMetric: boolean;
            stepDurationMetric: boolean;
        };
        canaryMetricsConfiguration: {
            failedRequestsMetric: boolean;
            _2xxMetric: boolean;
            _4xxMetric: boolean;
            _5xxMetric: boolean;
            aggregatedFailedRequestsMetric: boolean;
            aggregated2xxMetric: boolean;
            aggregated4xxMetric: boolean;
            aggregated5xxMetric: boolean;
            failedCanaryMetric: boolean;
            aggregatedFailedCanaryMetric: boolean;
        };
        getAllConfigurations(): {
            failedRequestsMetric: boolean;
            _2xxMetric: boolean;
            _4xxMetric: boolean;
            _5xxMetric: boolean;
            aggregatedFailedRequestsMetric: boolean;
            aggregated2xxMetric: boolean;
            aggregated4xxMetric: boolean;
            aggregated5xxMetric: boolean;
            failedCanaryMetric: boolean;
            aggregatedFailedCanaryMetric: boolean;
            stepSuccessMetric: boolean;
            stepDurationMetric: boolean;
            continueOnStepFailure: boolean;
            continueOnHttpStepFailure: boolean;
            includeRequestHeaders: boolean;
            includeResponseHeaders: boolean;
            restrictedHeaders: any[];
            includeRequestBody: boolean;
            includeResponseBody: boolean;
            screenshotOnStepStart: boolean;
            screenshotOnStepSuccess: boolean;
            screenshotOnStepFailure: boolean;
        };
        getConfig(configName: any): any;
        setConfig(options?: {}): void;
        getStepConfiguration(stepConfigOptions: any): SyntheticsConfiguration;
        withScreenshotOnStepStart(screenshotOnStepStart: any): SyntheticsConfiguration;
        getScreenshotOnStepStart(): boolean;
        withScreenshotOnStepSuccess(screenshotOnStepSuccess: any): SyntheticsConfiguration;
        getScreenshotOnStepSuccess(): boolean;
        withScreenshotOnStepFailure(screenshotOnStepFailure: any): SyntheticsConfiguration;
        getScreenshotOnStepFailure(): boolean;
        disableStepScreenshots(): void;
        enableStepScreenshots(): void;
        withIncludeRequestHeaders(includeRequestHeaders: any): SyntheticsConfiguration;
        getIncludeRequestHeaders(): boolean;
        withRestrictedHeaders(restrictedHeaders: any): SyntheticsConfiguration;
        getRestrictedHeaders(): any[];
        withIncludeRequestBody(includeRequestBody: any): SyntheticsConfiguration;
        getIncludeRequestBody(): boolean;
        withIncludeResponseHeaders(includeResponseHeaders: any): SyntheticsConfiguration;
        getIncludeResponseHeaders(): boolean;
        withIncludeResponseBody(includeResponseBody: any): SyntheticsConfiguration;
        getIncludeResponseBody(): boolean;
        enableReportingOptions(): void;
        disableReportingOptions(): void;
        withContinueOnStepFailure(continueOnStepFailure: any): SyntheticsConfiguration;
        getContinueOnStepFailure(): boolean;
        withContinueOnHttpStepFailure(continueOnHttpStepFailure: any): SyntheticsConfiguration;
        getContinueOnHttpStepFailure(): boolean;
        withStepSuccessMetric(stepSuccessMetric: any): SyntheticsConfiguration;
        getStepSuccessMetric(): boolean;
        withStepDurationMetric(stepDurationMetric: any): SyntheticsConfiguration;
        getStepDurationMetric(): boolean;
        disableStepMetrics(): void;
        enableStepMetrics(): void;
        with2xxMetric(_2xxMetric: any): SyntheticsConfiguration;
        get2xxMetric(): boolean;
        with4xxMetric(_4xxMetric: any): SyntheticsConfiguration;
        get4xxMetric(): boolean;
        with5xxMetric(_5xxMetric: any): SyntheticsConfiguration;
        get5xxMetric(): boolean;
        withFailedRequestsMetric(failedRequestsMetric: any): SyntheticsConfiguration;
        getFailedRequestsMetric(): boolean;
        withAggregatedFailedRequestsMetric(aggregatedFailedRequestsMetric: any): SyntheticsConfiguration;
        getAggregatedFailedRequestsMetric(): boolean;
        withAggregated2xxMetric(aggregated2xxMetric: any): SyntheticsConfiguration;
        getAggregated2xxMetric(): boolean;
        withAggregated4xxMetric(aggregated4xxMetric: any): SyntheticsConfiguration;
        getAggregated4xxMetric(): boolean;
        withAggregated5xxMetric(aggregated5xxMetric: any): SyntheticsConfiguration;
        getAggregated5xxMetric(): boolean;
        withFailedCanaryMetric(failedCanaryMetric: any): SyntheticsConfiguration;
        getFailedCanaryMetric(): boolean;
        withAggregatedFailedCanaryMetric(aggregatedFailedCanaryMetric: any): SyntheticsConfiguration;
        getAggregatedFailedCanaryMetric(): boolean;
        disableRequestMetrics(): void;
        enableRequestMetrics(): void;
        disableAggregatedRequestMetric(): void;
        enableAggregatedRequestMetric(): void;
        withVisualCompareWithBaseRun(visualCompareWithBaseRun: boolean): SyntheticsConfiguration;
        getVisualCompareWithBaseRun(): boolean;
        withVisualVarianceThresholdPercentage(visualVarianceThresholdPercentage: number): SyntheticsConfiguration;
        getVisualVarianceThresholdPercentage(): number;
        withVisualVarianceHighlightHexColor(visualVarianceHighlightHexColor: string): SyntheticsConfiguration;
        getVisualVarianceHighlightHexColor(): string;
        withFailCanaryRunOnVisualVariance(failCanaryRunOnVisualVariance: boolean): SyntheticsConfiguration;
        getFailCanaryRunOnVisualVariance(): boolean;
    }
}
