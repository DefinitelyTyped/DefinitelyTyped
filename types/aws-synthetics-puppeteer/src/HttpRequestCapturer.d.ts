// js installs to root of node_modules
// eslint-disable-next-line @definitelytyped/no-single-declare-module
declare module "HttpRequestCapturer" {
    const _exports: HttpRequestCapturer;
    export = _exports;
    /**
     * This module captures HTTP requests for reporting and creates traces if enabled.
     */
    class HttpRequestCapturer {
        _httpRequests: any[];
        _httpRequestCount: number;
        _stepHttpMapping: {};
        _executionError: any;
        _requestsResult: any;
        _tracing: any;
        _syntheticsConfiguration: SyntheticsConfiguration;
        reset(): void;
        configure(requestsResult: any, tracing: any, syntheticsConfiguration: any): void;
        startCapture(): void;
        captureHTTPsGlobal(module: any): void;
        getRequestsResult(): any;
        getStepHttpMapping(): {};
        getHttpRequests(): any[];
        addRequest(stepId: any, request: any): void;
        setExecutionError(err: any): void;
        getExecutionError(): any;
        isLibraryGeneratedRequest(requestOptions: any): boolean;
        enableCapture(module: any): void;
        addHelperHeaders(stepId: any, requestOptions: any, body: any, stepConfig: any): void;
        getHttpTimings(timings: any): HttpTimingsResult;
    }
    import { SyntheticsConfiguration } from "SyntheticsConfiguration";
    import { HttpTimingsResult } from "HttpRequestsReport";
}
